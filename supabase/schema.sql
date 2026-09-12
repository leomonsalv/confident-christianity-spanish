-- ==============================================================================
-- Cristianismo con Confianza - Facilitator Guide
-- Esquema de Base de Datos para Sugerencias Editoriales y de Facilitación
-- ==============================================================================

-- 1. Crear extensión para UUID si no existe
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Crear tabla de sugerencias
CREATE TABLE IF NOT EXISTS public.suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  selected_text TEXT NOT NULL,
  suggestion TEXT NOT NULL,
  author_name TEXT DEFAULT 'Facilitador Anónimo',
  category TEXT DEFAULT 'Mejora editorial',
  module_number INTEGER,
  section_id TEXT DEFAULT 'general',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Índices para acelerar búsquedas y filtros comunes
CREATE INDEX IF NOT EXISTS idx_suggestions_module_number ON public.suggestions(module_number);
CREATE INDEX IF NOT EXISTS idx_suggestions_created_at ON public.suggestions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_suggestions_category ON public.suggestions(category);

-- 4. Habilitar Seguridad a Nivel de Fila (RLS)
ALTER TABLE public.suggestions ENABLE ROW LEVEL SECURITY;

-- 5. Eliminar políticas previas si existieran para evitar conflictos al re-ejecutar
DROP POLICY IF EXISTS "Permitir lectura publica de sugerencias" ON public.suggestions;
DROP POLICY IF EXISTS "Permitir insercion publica de sugerencias" ON public.suggestions;
DROP POLICY IF EXISTS "Permitir lectura publica" ON public.suggestions;
DROP POLICY IF EXISTS "Permitir insercion publica" ON public.suggestions;

-- 6. Crear políticas para acceso anónimo y autenticado
-- Lectura: permite consultar las sugerencias para mostrarlas en la guía
CREATE POLICY "Permitir lectura publica de sugerencias"
  ON public.suggestions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Inserción: permite a los facilitadores enviar aportes sin necesidad de login previo
CREATE POLICY "Permitir insercion publica de sugerencias"
  ON public.suggestions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 7. Función y Trigger para actualizar automáticamente el campo updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_suggestions_updated_at ON public.suggestions;
CREATE TRIGGER set_suggestions_updated_at
  BEFORE UPDATE ON public.suggestions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 8. Habilitar publicación en tiempo real (opcional para Supabase Realtime)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.suggestions;
  END IF;
EXCEPTION
  WHEN duplicate_object THEN NULL;
  WHEN undefined_object THEN NULL;
END $$;
