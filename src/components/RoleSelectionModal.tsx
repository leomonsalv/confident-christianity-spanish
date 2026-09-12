import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Compass,
  Headphones
} from 'lucide-react';
import { UserRole } from '../types';

interface RoleSelectionModalProps {
  isOpen: boolean;
  currentRole: UserRole | null;
  onSelectRole: (role: UserRole) => void;
  onClose?: () => void;
}

export const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({
  isOpen,
  currentRole,
  onSelectRole,
  onClose,
}) => {
  if (!isOpen) return null;

  const canClose = Boolean(currentRole && onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={() => { if (canClose && onClose) onClose(); }}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden z-10 my-8 transition-all animate-in zoom-in-95 duration-300">
        {/* Top subtle glow / banner */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500" />

        {/* Close Button (only if already has a role) */}
        {canClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20"
            aria-label="Cerrar modal de selección"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="p-6 sm:p-10 space-y-8">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Cristianismo con Confianza · CMF & ICMDA</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              ¿Cómo deseas ingresar hoy?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Selecciona tu perfil para adaptar la plataforma a tus necesidades. Podrás cambiar de vista cuando quieras.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Facilitador Card */}
            <div 
              onClick={() => onSelectRole('facilitador')}
              className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl cursor-pointer border-2 transition-all duration-300 ${
                currentRole === 'facilitador'
                  ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/25 ring-2 ring-indigo-500/20 shadow-xl'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850/60 hover:border-indigo-400 dark:hover:border-indigo-500/60 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {currentRole === 'facilitador' && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/80 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Perfil actual</span>
                </div>
              )}

              <div className="space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/25 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Líder / Conductor
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Soy Facilitador
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Para quienes lideran, moderan y gestionan las sesiones de grupo. Acceso a la metodología integral de conducción y herramientas en vivo.
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Guía oficial completa:</strong> Partes A, B, C y D (referencias).</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Herramientas de sala:</strong> Cronómetro interactivo de 60', tiempos y pausas.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Pedagogía:</strong> Alertas clave, "Lo que no se puede recortar" y notas privadas.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Gestión de objeciones:</strong> Respuestas de sala preparadas y Vuelta a Jesús.</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all group-hover:gap-3"
                >
                  <span>Entrar como Facilitador</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Estudiante Card */}
            <div 
              onClick={() => onSelectRole('estudiante')}
              className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl cursor-pointer border-2 transition-all duration-300 ${
                currentRole === 'estudiante'
                  ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/25 ring-2 ring-emerald-500/20 shadow-xl'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850/60 hover:border-emerald-400 dark:hover:border-emerald-500/60 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {currentRole === 'estudiante' && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Perfil actual</span>
                </div>
              )}

              <div className="space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/25 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Participante / Estudio
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Soy Estudiante
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Para quienes participan en el curso y desean estudiar el contenido de forma clara, directa y sin distracciones administrativas.
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Los 20 Módulos de estudio:</strong> Objetivos claros y aprendizaje modular.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Contenido visual del Dr. Peter Saunders:</strong> Diagramas y exposiciones.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Preguntas de reflexión:</strong> Para estudio personal o diálogo en equipo.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Experiencia limpia:</strong> Sin alertas de moderador ni sobrecarga técnica.</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all group-hover:gap-3"
                >
                  <span>Entrar como Estudiante</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-2 text-center border-t border-slate-200 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              💡 Tu selección adapta la plataforma: los estudiantes ven los módulos directamente y los facilitadores tienen acceso a la guía de conducción completa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
