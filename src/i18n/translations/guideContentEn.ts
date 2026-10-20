// Confident Christianity: Facilitator's Guide (ICMDA / CMF)
// Complete English translation dataset

import { VisualData, ModuleItem } from '../../data/guideContent';

export const GUIDE_METADATA_EN = {
  "title": "Facilitator's Guide",
  "course": "Confident Christianity",
  "subtitle": "The 20 modules, module by module",
  "organization": "ICMDA · Training Unit",
  "fellowship": "CMF · Christian Medical Fellowship",
  "workbookComplement": "Companion to the Participant's Workbook",
  "terminologyBase": "English Edition (NIV/ESV)",
  "edition": "English Edition · 2026",
  "coverImage": "/cover.png"
};

export const ABOUT_SECTION_EN = {
  "title": "About this Guide",
  "intro": "The Confident Christianity course has been running since 2020 across 91 countries. Until now, there was no comprehensive guide for the facilitators who lead it: facilitators learned the role by doing it, and the quality of a cohort often depended on improvisation. This guide bridges that gap.",
  "items": [
    {
      "heading": "What it is",
      "content": "Written for the facilitator, not the student. And it is prescriptive: it tells you what to do."
    },
    {
      "heading": "Not a second workbook",
      "content": "Students have their videos and their workbook. Nothing here was written to be read aloud verbatim to them."
    },
    {
      "heading": "How to read it",
      "content": "Read Parts A and B once, completely, before your first session. Afterwards, re-read only the specific module of the week."
    },
    {
      "heading": "Sources and terminology",
      "content": "Content is drawn from Dr. Peter Saunders' recorded lectures and the participant workbook. Chapter names, technical terms, and biblical references align with the workbook."
    },
    {
      "heading": "If you disagree",
      "content": "The session is not the place to debate course material. Consult TTCC resources or submit feedback to the Global Coordinator for future editions."
    }
  ]
};

export const PARTE_A_EN = {
  "title": "Part A — The Facilitator's Role",
  "subtitle": "Requirements, pastoral posture, and avoiding pitfalls",
  "a1": {
    "title": "A.1 What is expected of you",
    "description": "These are ICMDA's written requirements. They apply to all training tracks.",
    "requirements": [
      {
        "title": "Complete the course before facilitating",
        "desc": "In Confident Christianity, this means at least 80% attendance over the ten weeks."
      },
      {
        "title": "Have a burden for the topic",
        "desc": "A genuine interest in what you are facilitating, not merely being available."
      },
      {
        "title": "Be present",
        "desc": "Commit to the majority of sessions. If you cannot attend, notify in advance and arrange co-facilitator coverage."
      },
      {
        "title": "Know how to facilitate conversation",
        "desc": "Skills in guiding dialogue, mindful language, and relational connection with participants."
      },
      {
        "title": "Set aside personal opinions",
        "desc": "Prioritize shared group learning over championing personal hobbyhorses."
      },
      {
        "title": "Be willing to be vulnerable",
        "desc": "Share your own struggles, admit the limits of your knowledge, and ask for help."
      },
      {
        "title": "Have a stable internet connection",
        "desc": "In online cohorts, this is a non-negotiable requirement, not a detail."
      }
    ]
  },
  "a2": {
    "title": "A.2 What you do not need to be",
    "content": "You do not need to be an apologetics expert. The core content is already in Dr. Peter's talks and the workbook. What is needed is someone who holds and nurtures the conversation.",
    "goldenRule": {
      "quote": "«Good question. I don't know. I will look into it and bring it back next week»",
      "explanation": "And then actually bring it back. That builds far more trust in you than any improvisation."
    }
  },
  "a3": {
    "title": "A.3 The three things that go wrong",
    "pitfalls": [
      {
        "number": 1,
        "title": "Becoming a secretary",
        "desc": "Showing up only on your assigned week, presenting, taking attendance, and disappearing. The technical task is done, but the cohort finishes fewer students and produces zero new facilitators. What brings students back next week is that someone noticed they were absent."
      },
      {
        "number": 2,
        "title": "Not knowing how to handle breakout rooms",
        "desc": "This stalls the session and forces the coordinating team to stand guard every week. Technical autonomy liberates others."
      },
      {
        "number": 3,
        "title": "Straying from the original material",
        "desc": "Common among articulate speakers: taking a module, finding a hook, and giving the talk they wanted to give. The student receives a different course. Part C sets the baseline floor."
      }
    ]
  },
  "a4": {
    "title": "A.4 The half of the work that happens outside the session",
    "pastoralDuties": [
      {
        "timing": "Before the cohort",
        "action": "Invite personally",
        "desc": "Students who arrive via personal invitation complete the course at a significantly higher rate than those who come through publicity. Inviting is the facilitator's first pastoral act."
      },
      {
        "timing": "After each session",
        "action": "Reach out to whoever was absent",
        "desc": "On the same day. Individually, not in the group chat."
      },
      {
        "timing": "During the week",
        "action": "Stay active in the group",
        "desc": "Respond, comment, send materials and encouragement."
      },
      {
        "timing": "Always",
        "action": "Be ready to step in",
        "desc": "If the assigned facilitator fails to appear, the session still happens."
      }
    ]
  }
};

export const PARTE_B_EN = {
  "title": "Part B — Leading the Session",
  "subtitle": "Online 60-minute session structure and in-person adaptations",
  "corePrinciple": "Small group interaction should occupy as much of the hour as possible. Your success is inversely proportional to how much you talk. You speak 10 of the 60 minutes.",
  "schedule": [
    {
      "time": "0–5 min",
      "minutes": 5,
      "block": "Arrival & Welcome",
      "action": "Give leeway for late arrivals. Re-send the invite in the group. Ask the co-facilitator pair of the day to load slides. Ask a participant to pray.",
      "icon": "Users"
    },
    {
      "time": "5–15 min",
      "minutes": 10,
      "block": "Video & Workbook Summary",
      "action": "A summary only. Highlight main learning points from the video and workbook. Do not re-teach the module: students already watched it. If the pair lectures, gently intervene.",
      "icon": "Video"
    },
    {
      "time": "15–25 min",
      "minutes": 10,
      "block": "First Dynamic (Breakouts)",
      "action": "Pairs or trios in breakout rooms. Announce the time out loud before splitting. Send a broadcast message halfway through.",
      "icon": "MessagesSquare"
    },
    {
      "time": "25–35 min",
      "minutes": 10,
      "block": "Group Debrief",
      "action": "Full group. They speak; you intervene minimally.",
      "icon": "MessageCircle"
    },
    {
      "time": "35–55 min",
      "minutes": 20,
      "block": "Repetition",
      "action": "Second breakout dynamic and second full group debrief.",
      "icon": "Repeat"
    },
    {
      "time": "55–60 min",
      "minutes": 5,
      "block": "Closing & Next Steps",
      "action": "Thank the pair of the day. Give constructive feedback. Announce next week's co-facilitators. Reinforce watching videos ahead of time.",
      "icon": "CheckCircle2"
    }
  ],
  "practicalTips": [
    "Breakout rooms take ~1 minute to close after the command. Close them early.",
    "The broadcast message button reaches all rooms simultaneously. Use it halfway through.",
    "Open your participant list before joining. Using a student's name in week 2 transforms their connection to the course."
  ],
  "inPersonChanges": {
    "title": "B.2 What Changes In-Person",
    "points": [
      "All modules are presented live by facilitators without video support: preparation load is significantly higher.",
      "Logistics is ministry: venue, food, printed workbooks, and attendance logs for certificate generation.",
      "The format that works is stations: three groups rotating across three modules with fixed time limits.",
      "Draft the schedule together with the track coordination team (TTCC), never alone.",
      "In-person cohorts have higher completion rates, but produce fewer new facilitators. Online cohorts produce the vast majority of our future leaders. Neither format replaces the other."
    ]
  }
};

export const PARTE_C_INTRO_EN = {
  "title": "Part C — The 20 Modules",
  "description": "Course structure: twelve core modules (1–12) and eight tough questions (13–20). Two modules per week across ten weeks.",
  "tracks": [
    {
      "name": "Modules 1–12",
      "badge": "Core Modules",
      "desc": "Worldview, Christian theism, the journey of faith, dialogue, persuasion, decision."
    },
    {
      "name": "Modules 13–20",
      "badge": "Tough Questions",
      "desc": "The eight tough apologetics questions — the agenda raised by your own cohort in Module 8."
    }
  ],
  "readingGuide": [
    {
      "field": "Objective",
      "desc": "What the student must take away. If they didn't get this, the module did not happen."
    },
    {
      "field": "What Dr. Peter Presents",
      "desc": "Summary of video content — for you to recognize, not to re-lecture."
    },
    {
      "field": "What Cannot Be Cut",
      "desc": "The non-negotiable floor of the module. Never cut this for time."
    },
    {
      "field": "Discussion Questions",
      "desc": "The official questions. Use them as written."
    },
    {
      "field": "Common Objections",
      "desc": "What surfaces in the room, and how to handle it — including deferred topics."
    },
    {
      "field": "Workbook Reference",
      "desc": "The corresponding chapter in the student's workbook."
    }
  ],
  "notes": "Modules 1, 2, 3, and 10 do not have dedicated workbook chapters: their content lives in the talks and slides. Modules 13–20 also include a corresponding Turn in Part D.1 to bring Jesus back to the center."
};

export const MODULES_DATA_EN: ModuleItem[] = [
  {
    "id": 1,
    "number": 1,
    "title": "Worldview",
    "workbookChapter": "No dedicated chapter",
    "objective": "Help students realize that every person — including themselves — interprets reality through a set of presuppositions that are rarely examined.",
    "whatDrPeterPresents": "A worldview (from German Weltanschauung) is a framework of beliefs about life and the universe. Everyone has one, consciously or not. It functions like a pair of eyeglasses: you don't look at them, you look through them.\n\nThe central metaphor is the iceberg: what we see above the waterline is behavior (one tenth). Beneath lie values, beneath those are beliefs, and at the foundation are presuppositions about reality. Arguing only about behavior is arguing with the tip.\n\nSix diagnostic questions discover a worldview: What is God? (theology) • What are human beings? (anthropology) • How do we know truth? (epistemology) • Why do humans have value? (values) • How do we decide right from wrong? (ethics) • What happens after death?\n\nFour major worldviews: pantheism (Hinduism, Buddhism, New Age), polytheism (animism, tribal/folk religions), theism (Christianity, Judaism, Islam), and atheism (naturalism, existentialism, nihilism). And their distribution among general population vs medical students:",
    "cannotCut": "The five conclusions in order: (1) at least four distinct worldviews exist; (2) highly intelligent and educated people hold each of them; (3) they are mutually exclusive; (4) at most one can be true; (5) therefore, many intelligent people hold beliefs that are false. Point 5 is the reason this module exists. Never cut it for lack of time.",
    "driverAlert": null,
    "discussionQuestions": [
      "What is the most prevalent worldview in your cultural context?",
      "How does this worldview affect ethical opinions and behaviors on issues like abortion or sexuality?"
    ],
    "commonObjections": [
      {
        "objection": "«Isn't it arrogant to claim that others are wrong?»",
        "response": "Reflect the logic back: The four worldviews make contradictory claims about the same reality. Claiming all four are true is the only logically impossible position. That is not arrogance; it is simple arithmetic. (Module 11 explores this further)."
      },
      {
        "objection": "«I don't have a worldview; I am just purely rational.»",
        "response": "A perfect opening for the six diagnostic questions. Ask the person to answer all six: they will describe a worldview."
      }
    ],
    "workbookRef": "No dedicated chapter. Related material in Pre-evangelism → «Questioning False Beliefs» and «Taking the Roof Off».",
    "vueltaRef": "",
    "pageNumber": 8,
    "visualData": {
      "type": "table",
      "title": "Worldview Distribution",
      "headers": [
        "Worldview",
        "General Population",
        "Medical Students"
      ],
      "rows": [
        [
          "Atheism (naturalism, nihilism)",
          "13 %",
          "65 %"
        ],
        [
          "Pantheism (Hinduism, Buddhism, New Age)",
          "20 %",
          "5 %"
        ],
        [
          "Polytheism (animism, folk religions)",
          "11 %",
          "0 %"
        ],
        [
          "Theism (Christianity, Judaism, Islam)",
          "56 %",
          "30 %"
        ]
      ]
    }
  },
  {
    "id": 2,
    "number": 2,
    "title": "Christian Theism",
    "workbookChapter": "No dedicated chapter",
    "objective": "Enable students to state without hesitation what distinguishes Christianity from all other faiths, including other theistic religions.",
    "whatDrPeterPresents": "He narrows the inquiry deliberately: not what is admirable about Christianity, but which elements are distinctive. He excludes character and the fruit of the Spirit: crucial, but not unique.\n\nSix marks: the authority of the Bible; the deity of Christ and the Trinity; Christ as the exclusive way of salvation; His physical death and bodily resurrection; the substitutionary atonement of the cross; and salvation by grace through faith and repentance.\n\nThe workbook condenses these into three distinctive affirmations that no other world religion agrees with:\n1. The deity of Christ (John 1:18)\n2. The authority of the Scriptures (2 Tim 3:16)\n3. Salvation by grace through faith (Eph 2:8)\n\nDenying any one of these three is abandoning authentic Christianity. The deity of Christ is explicitly proclaimed in at least eight NT passages (John 1:1-2; 1:18; 20:28; Acts 20:28; Rom 9:5; Titus 2:13; Heb 1:8; 2 Pet 1:1) and strongly implicit in many others.\n\nThe closing illustration is counterfeit currency: sub-Christian cults appear very similar to the real thing, but tested against these marks, they fail on all counts.",
    "cannotCut": "The three distinctive affirmations of the workbook, and the underlying criterion: distinctive, not merely good.",
    "driverAlert": null,
    "discussionQuestions": [
      "In what specific ways does Islam agree or disagree with Christianity?",
      "What are the core points of disagreement between Christianity and Islam?"
    ],
    "commonObjections": [
      {
        "objection": "«All religions ultimately teach the same basic morality.»",
        "response": "Agree with what is true: the workbook readily acknowledges that world religions share similar ethical codes. But divergence lies in theology: the nature of God, the identity of Jesus, and how salvation is attained. (Module 15 develops this)."
      },
      {
        "objection": "«Does this apply to Catholics / Jehovah's Witnesses / Mormons?»",
        "response": "Do not let the session dissolve into denominational polemics. Apply the three criteria and let students draw the logical conclusion."
      }
    ],
    "workbookRef": "No dedicated chapter. Distinctive affirmations are in «Is Christ the Only Way to God?».",
    "vueltaRef": "",
    "pageNumber": 9,
    "visualData": {
      "type": "cards3",
      "title": "Three Distinctive Affirmations",
      "cards": [
        {
          "title": "1. The Deity of Christ",
          "ref": "John 1:18"
        },
        {
          "title": "2. The Authority of Scripture",
          "ref": "2 Tim 3:16"
        },
        {
          "title": "3. Salvation by Grace through Faith",
          "ref": "Eph 2:8"
        }
      ]
    }
  },
  {
    "id": 3,
    "number": 3,
    "title": "The Journey of Faith",
    "workbookChapter": "The Engel Scale",
    "objective": "Replace the view of conversion as a single isolated event with conversion as a gradual process, showing where personal evangelism fits.",
    "whatDrPeterPresents": "Peter moves quickly through foundational presuppositions: everyone needs the gospel, including devout God-fearers (Cornelius in Acts 10); Jesus is the sole mediator through His cross (John 14:6; Acts 4:12; 1 Tim 2:5); and we share Christ compelled by His love and joy (2 Cor 5:14; Heb 12:2).\n\nThe centerpiece is the Engel Scale, spanning -10 (awareness of the supernatural) to 0 (regeneration). Full scale in Part D.3.\n\nNext is the evangelism effectiveness research: How did you come to Christ?",
    "cannotCut": "The 75–85% figure for friends and family, and locating our primary calling in sowing: churches that only know how to harvest fail because the mind and heart have not been prepared.",
    "driverAlert": null,
    "discussionQuestions": [
      "What people or circumstances were most influential in leading you to Christ?",
      "How much time elapsed between your first interest in Christianity and your conversion?"
    ],
    "commonObjections": [
      {
        "objection": "«So do evangelistic crusades serve no purpose?»",
        "response": "No. All four phases (cultivate, sow, reap, multiply) are essential; the error is expecting to reap what has never been cultivated or sown."
      },
      {
        "objection": "«Doesn't viewing conversion as a process diminish God's sovereign power?»",
        "response": "Module 5 addresses God's sovereignty directly. Acknowledge the question and revisit it next week."
      }
    ],
    "workbookRef": "The Engel Scale.",
    "vueltaRef": "",
    "pageNumber": 10,
    "visualData": {
      "type": "table",
      "title": "Evangelism Effectiveness: How Did You Come to Christ?",
      "headers": [
        "Pathway",
        "Percentage"
      ],
      "rows": [
        [
          "Own initiative",
          "4–6 %"
        ],
        [
          "Influenced by a minister/pastor",
          "4–7 %"
        ],
        [
          "Attracted by church program",
          "2–4 %"
        ],
        [
          "Church visitation",
          "1–2 %"
        ],
        [
          "Sunday school",
          "4–6 %"
        ],
        [
          "Crusade or TV broadcast",
          "0.1 %"
        ],
        [
          "Influence of friends and relatives (Key)",
          "75–85 %"
        ]
      ]
    }
  },
  {
    "id": 4,
    "number": 4,
    "title": "Pre-evangelism",
    "workbookChapter": "Pre-evangelism",
    "objective": "Teach how to transition from superficial conversation to the point where spiritual dialogue becomes possible without manipulation.",
    "whatDrPeterPresents": "The five levels of conversation: Level 1, Clichés; Level 2, Facts; Level 3, Ideas and judgments; Level 4, Feelings and emotions; Level 5, Completely open. Dr. Peter illustrates from surgical practice: the case report (fact), diagnosis (judgment), anxiety before surgery (feeling).\n\n«If our conversation with non-Christians never progresses beyond clichés and facts, if we cannot be authentic about what we really think, we will never be effective evangelists.»\n\nBuilding friendship: common interests, shared time, joint tasks, helping them — and letting them help you; heart-to-heart dialogue.\n\nFrancis Schaeffer's core concept: «taking the roof off». Non-Christian presuppositions clash with reality. Probing questions surface the point of tension between their worldview and the actual universe.",
    "cannotCut": "«Letting them help you»: the most frequently overlooked step and the one that most radically shifts relational dynamics. Plus the logic of the tension point: start from their presuppositions, not yours.",
    "driverAlert": "Terminology Note: The workbook titles this section «Taking the lid off», but quotes Schaeffer as «taking the roof off». Both phrases appear in student materials; do not spend session time debating terminology.",
    "discussionQuestions": [
      "What everyday activities offer the best opportunities for deep conversations with non-Christians?",
      "How would you apply Schaeffer's tension point in a dialogue about euthanasia?"
    ],
    "commonObjections": [
      {
        "objection": "«Isn't this manipulative?»",
        "response": "The difference is the intent: manipulation pushes someone toward an unexamined conclusion; pre-evangelism does the reverse by asking them to examine what they already believe."
      },
      {
        "objection": "«I find it very hard to bring up spiritual topics.»",
        "response": "An honest moment to admit that you struggle too. Module 8 tackles fear directly."
      }
    ],
    "workbookRef": "Pre-evangelism (all sections).",
    "vueltaRef": "",
    "pageNumber": 11,
    "visualData": {
      "type": "table",
      "title": "The Five Levels of Conversation",
      "headers": [
        "Level",
        "Conversation Type",
        "Medical / Surgical Example"
      ],
      "rows": [
        [
          "Level 1",
          "Cliché conversation",
          "Superficial greetings, pleasantries"
        ],
        [
          "Level 2",
          "Reporting facts",
          "Clinical case report, test results"
        ],
        [
          "Level 3",
          "Expressing ideas & judgments",
          "Clinical diagnosis and treatment plan"
        ],
        [
          "Level 4",
          "Expressing feelings & emotions",
          "Anxiety and vulnerability before surgery"
        ],
        [
          "Level 5",
          "Completely open communion",
          "Deep heart-to-heart and spiritual openness"
        ]
      ]
    }
  },
  {
    "id": 5,
    "number": 5,
    "title": "God's Sovereignty in Evangelism",
    "workbookChapter": "Evangelism and God's Sovereignty",
    "objective": "Correct two opposing errors: paralysis («God is in control, so why bother?») and guilt («It all depends on me»).",
    "whatDrPeterPresents": "The four mental traps Christians fall into:\n1. «If God is in control, there is no point in doing anything.»\n2. «I feel guilty for not sharing my faith with everyone I meet.»\n3. «I need to find a better technique to bring people to Christ.»\n4. «I give up! No one I talk to has ever accepted Christ.»\n\nEach trap confuses God's role with ours. God's universal role: Creator (Gen 1:1), Owner (Ps 24:1), Sustainer (Heb 1:3), Ruler (Dan 2:21), Redeemer (Rom 8:20).\n\nIn evangelism, God provides the message, opens doors, grants boldness, illuminates hearts, and regenerates. William Carey's encounter with hyper-Calvinism is highlighted: «The greatest obstacle to evangelism is not technique, but spiritual opposition.»",
    "cannotCut": "The word «and». The room will try to settle for half: either only prayer, or only human action. This module exists to hold both together: we pray AND we obey.",
    "driverAlert": null,
    "discussionQuestions": [
      "Which biblical passages on God's sovereignty in evangelism encourage you most?",
      "Can you share an experience where God clearly opened a door for you to share your faith?"
    ],
    "commonObjections": [
      {
        "objection": "«If God chooses who will believe, does my effort make any difference?»",
        "response": "Avoid getting bogged down in Calvinist-Arminian debates. Point to Acts 16:14: the Lord opened Lydia's heart while Paul was speaking. Both truths in a single sentence."
      },
      {
        "objection": "«I have witnessed to many people and nobody converted.»",
        "response": "This is often a wounded heart, not an intellectual objection. Do not debate. Point back to the Engel Scale: moving someone from -8 to -5 is genuine success."
      }
    ],
    "workbookRef": "Evangelism and God's Sovereignty.",
    "vueltaRef": "",
    "pageNumber": 12,
    "visualData": null
  },
  {
    "id": 6,
    "number": 6,
    "title": "What is the Gospel?",
    "workbookChapter": "What is the Gospel?",
    "objective": "Enable students to present the gospel from scratch in two minutes, recognizing what they habitually leave out.",
    "whatDrPeterPresents": "This module revolves around an exercise: An incoming missile will strike in two minutes. A non-Christian friend asks what you believe and what they must do. In pairs, each student presents the gospel in two minutes uninterrupted. The group then catalogs what was said and, critically, what was missing.\n\nFrom Peter's sermons in Acts, the essentials are: God revealed in history, Jesus' death and resurrection, His lordship, repentance, and forgiveness.\n\n«The most common errors are omitting the necessity of repentance and the reality of future judgment.» John Chapman's 5-heading outline is introduced: God the Ruler, People in Rebellion, God Rescues, What if I reject? (Separated), What if I receive? (Reconciled).",
    "cannotCut": "The exercise itself. If you cut the live practice and merely lecture the outline, the module fails: the learning happens in the contrast between the first and second attempt.",
    "driverAlert": "⚠ Facilitation Alert: When the room lists what was included in their presentations, repentance and judgment are almost always absent. Do not spoil it beforehand: let the debrief reveal it.",
    "discussionQuestions": [
      "Which crucial gospel element do Christians omit most often, and why?",
      "What is the advantage of knowing an outline like God – Humanity – Christ?"
    ],
    "commonObjections": [
      {
        "objection": "«Doesn't an outline reduce the gospel to a rigid formula?»",
        "response": "It is a framework, not a script. It exists so you don't omit essential elements under pressure."
      },
      {
        "objection": "«Speaking about hell and judgment pushes people away.»",
        "response": "The workbook is uncompromising: «to ignore judgment is to make nonsense of the gospel.»"
      }
    ],
    "workbookRef": "What is the Gospel? • What Makes a Good Gospel Outline? • Putting it into Practice.",
    "vueltaRef": "",
    "pageNumber": 13,
    "visualData": null
  },
  {
    "id": 7,
    "number": 7,
    "title": "The Place of Dialogue",
    "workbookChapter": "How the Apostles Did It",
    "objective": "Show that the primary communication hurdle in evangelism is rarely theological content, but vocabulary and setting.",
    "whatDrPeterPresents": "Opens with Gary Larson's cartoon: a man gives elaborate instructions to his dog, but all the dog hears is «Blah blah blah Rover blah blah». In evangelism, we often use Christian jargon (sanctification, propitiation, washed in the blood) that makes no sense to secular listeners.\n\nIn Athens (Acts 17), Paul spoke using Greek philosophical language and quoted their poets. Three marks of apostolic evangelism:\n1. Words people understand (Acts 17:18)\n2. Settings where they feel comfortable (Acts 16:13; 17:17; 19:9)\n3. Genuine dialogue (dialegomai: two-way exchange of words; used 10 times in Acts).",
    "cannotCut": "The three marks with their Acts citations, and the insight that monologuing is usually a choice for facilitator comfort rather than evangelistic fruitfulness.",
    "driverAlert": null,
    "discussionQuestions": [
      "Review the three apostolic principles and their biblical references.",
      "Why do you think contemporary Christians so often neglect these three principles?"
    ],
    "commonObjections": [
      {
        "objection": "«Preaching is biblical; shouldn't proclamation be our only method?»",
        "response": "Proclamation has its place in church worship, but outside the church the apostles engaged in dialogue (e.g. daily discussions in the hall of Tyrannus, Acts 19:9)."
      },
      {
        "objection": "«In my cultural context, open dialogue is taboo; only one-way listening is allowed.»",
        "response": "A valid cultural constraint. Explore with the group: what is the local equivalent of «a setting where people feel comfortable»?"
      }
    ],
    "workbookRef": "How the Apostles Did It.",
    "vueltaRef": "",
    "pageNumber": 14,
    "visualData": null
  },
  {
    "id": 8,
    "number": 8,
    "title": "The Nature of Dialogue",
    "workbookChapter": "The Nature of Dialogue",
    "objective": "Name fear candidly and convert it from an obstacle into a structured preparation checklist.",
    "whatDrPeterPresents": "«Speaking openly about your faith in God can be terrifying!» The three primary fears: losing friends; being perceived as judgmental; not knowing the answers to difficult questions.\n\nPaul Little's 7 Lethal Questions are contrasted with Paul Weston's empirical UK survey of 600 people. While Christians fear complex intellectual traps, the secular public mostly feels Christianity is irrelevant or hypocritical.\n\nThe workbook's concluding diagnosis: the ultimate reason people reject Christ is moral, not intellectual — they are unwilling to repent. Intellectual smoke screens must be cleared to reach the real heart.",
    "cannotCut": "The exercise of writing down personal fears. This diagnostic step tells the facilitator what the cohort will need in Modules 13 through 20.",
    "driverAlert": "⚠ Facilitation Notes: The list is called «the seven lethal questions» but contains eight items in student workbooks. Treat objections as questions to address, not as debates to win.",
    "discussionQuestions": [
      "What frightens you most about sharing your faith, and how can that fear be overcome?",
      "What questions do non-believers in your sphere ask most frequently?"
    ],
    "commonObjections": [
      {
        "objection": "«What if my mind goes blank and I don't know what to say?»",
        "response": "Freezing is normal. Saying «I don't know, but I'll find out» is an honest response that strengthens relational trust."
      }
    ],
    "workbookRef": "The Nature of Dialogue.",
    "vueltaRef": "",
    "pageNumber": 15,
    "visualData": {
      "type": "table",
      "title": "Christian Fears vs Public Reality",
      "headers": [
        "The 7 Lethal Questions (Paul Little)",
        "Empirical Survey (600 UK secular adults)"
      ],
      "rows": [
        [
          "1. Is Christ the only way to God?",
          "There is no proof"
        ],
        [
          "2. Isn't the Bible full of errors?",
          "Christianity is irrelevant to my life"
        ],
        [
          "3. Isn't religious experience purely psychological?",
          "Never thought seriously about it"
        ],
        [
          "4. How can miracles be possible?",
          "The church itself is the biggest obstacle"
        ],
        [
          "5. Evidence for the resurrection",
          "Too much suffering in the world"
        ],
        [
          "6. What about those who have never heard?",
          "Christianity cannot be the only way"
        ],
        [
          "7. Why do the innocent suffer?",
          "—"
        ],
        [
          "8. Won't a good moral life get me to heaven?",
          "—"
        ]
      ]
    }
  },
  {
    "id": 9,
    "number": 9,
    "title": "Reasons for the Christian Faith",
    "workbookChapter": "The Basic Question",
    "objective": "Equip students with three valid response angles and train them to choose which topics to put on the conversational agenda.",
    "whatDrPeterPresents": "Why do YOU believe in God? Three valid starting points:\n1. Beauty and design in the natural order (Ps 19:1; Rom 1:19-20)\n2. Internal conscience and moral law (Acts 17:27; Rom 2:15)\n3. God revealed in Jesus Christ (Col 1:13-15)\n\nEach approach invites different objections: (1) Creation brings up evolution and suffering; (2) Experience brings up relativism; (3) Jesus focuses on the New Testament.\n\n«The basic answer? Go straight to the heart of the gospel: talk about Jesus!»",
    "cannotCut": "The distinction between the three objection clusters, and deliberately guiding the conversation toward Jesus rather than getting trapped in science or philosophy.",
    "driverAlert": null,
    "discussionQuestions": [
      "What is the most compelling reason for your personal faith in Christ?",
      "How can we keep conversations focused on Christ rather than side issues?"
    ],
    "commonObjections": [
      {
        "objection": "«Hasn't modern evolutionary science disproved design?»",
        "response": "Do not get trapped in a biology debate. Point out that this is cluster (1) and ask: why does arguing about science rarely lead anyone to Jesus?"
      },
      {
        "objection": "«Isn't conscience merely social conditioning?»",
        "response": "Module 20 addresses psychology. Note the question and save it for that week."
      }
    ],
    "workbookRef": "The Basic Question.",
    "vueltaRef": "",
    "pageNumber": 16,
    "visualData": null
  },
  {
    "id": 10,
    "number": 10,
    "title": "The Process of Persuasion",
    "workbookChapter": "No dedicated chapter",
    "objective": "Provide a replicable conversational framework and demonstrate it across three major worldviews.",
    "whatDrPeterPresents": "The apostolic model in three movements: Identify (common ground), Confront (expose false assumptions), and Invite (present Christ).\n\n«Jesus is the only way to God, but there are many pathways to Jesus.» Paul modeled this: in the synagogue he cited the Old Testament; in Lystra he spoke of rain and crops; in Athens he quoted pagan poets.\n\nThe Submarine Model: ask questions rather than making dogmatic assertions; avoid Christian jargon; build on agreement; gently expose contradictions; ask permission to share.",
    "cannotCut": "The sequence: Identify always comes first. And «asking permission» before sharing the gospel — the single most effective way to lower conversational defensiveness.",
    "driverAlert": null,
    "discussionQuestions": [
      "How did Paul adapt his message for different audiences in Acts?",
      "What common ground can you identify with the worldview of your colleagues?"
    ],
    "commonObjections": [
      {
        "objection": "«Isn't finding common ground with Islam or atheism a compromise?»",
        "response": "Identifying common ground is not agreeing with everything; it is finding the relational starting point. Paul cited pagan poets in Athens."
      },
      {
        "objection": "«Isn't confrontation too aggressive?»",
        "response": "Confrontation here means asking thought-provoking questions, not attacking. In the submarine model, everything is done through humble questions."
      }
    ],
    "workbookRef": "No dedicated chapter. Contextualization is in How the Apostles Did It.",
    "vueltaRef": "",
    "pageNumber": 17,
    "visualData": {
      "type": "table",
      "title": "Paul's Persuasion Matrix",
      "headers": [
        "Worldview",
        "IDENTIFY (Common Ground)",
        "CONFRONT (Inconsistencies)",
        "INVITE (Christ)"
      ],
      "rows": [
        [
          "Islam",
          "One God, creation, prophets, Jesus, judgment, shared history",
          "Sin, nature of salvation, God's character, internal coherence",
          "Revelation, the Trinity, the Cross"
        ],
        [
          "Judaism",
          "One God, the Law, the prophets, the Old Testament",
          "Messianic prophecies, afterlife, ethics, gentile inclusion",
          "Biblical prophecy fulfilled, Jesus the Messiah"
        ],
        [
          "Atheism",
          "Science, truth, historical evidence, human rationality",
          "Consciousness, objective morality, free will, meaning, destiny",
          "Christ's resurrection, personal encounter, life beyond death"
        ]
      ]
    }
  },
  {
    "id": 11,
    "number": 11,
    "title": "Circular Reasoning and Relativism",
    "workbookChapter": "Avoiding Circular Reasoning • Relativism",
    "objective": "Teach the way out of two conversational dead-ends: circular reasoning and «it's true for you, but not for me».",
    "whatDrPeterPresents": "Circular reasoning: «The Bible is true because it is the Word of God, and we know it's God's Word because the Bible says so.» Non-believers reject this instantly. Our argument is historical and linear, treating the NT as reliable historical evidence for Christ's resurrection.\n\nRelativism: «Is the earth round or flat? It cannot be both.» Three flaws:\n1. It is self-refuting (claiming absolute truth that no absolute truth exists)\n2. Nobody lives consistently by it\n3. Francis Schaeffer's principle: establish the antithesis.\n\nThe empty tomb: it was either empty on Easter morning or it wasn't. It cannot be empty for believers and occupied for skeptics.",
    "cannotCut": "The self-refutation principle, linear historical argument, and the concrete reality of the empty tomb.",
    "driverAlert": null,
    "discussionQuestions": [
      "How can we avoid circular reasoning when sharing our faith?",
      "What is the most effective response to «that may be true for you, but not for me»?"
    ],
    "commonObjections": [
      {
        "objection": "«Subjective truth exists — look at taste and preferences.»",
        "response": "Yes: preferences are subjective. But history is objective. Whether Jesus rose bodily from the dead is a historical event: equally true or false for all humanity."
      },
      {
        "objection": "«Telling someone they are wrong is intolerant.»",
        "response": "Remove labels: is it intolerant for a doctor to tell a patient that their diagnosis is incorrect?"
      }
    ],
    "workbookRef": "Avoiding Circular Reasoning • Relativism.",
    "vueltaRef": "",
    "pageNumber": 18,
    "visualData": null
  },
  {
    "id": 12,
    "number": 12,
    "title": "Successful Evangelism",
    "workbookChapter": "What is Successful Evangelism?",
    "objective": "Conclude the core modules with the practical next step: how to guide someone who understands the gospel toward a decision.",
    "whatDrPeterPresents": "Redefining success: not headcounts, but faithfulness to God's message. Three criteria for successful evangelism:\n1. Non-Christians must be present (not just the faithful flock)\n2. The gospel must be presented clearly and persuasively (2 Tim 2:15)\n3. The atmosphere must be conducive to listening (dinner discussions)\n\n«I cannot hear what you are saying because your life is shouting too loudly.» The diagnostic closing sequence: Direct to the Jugular (Part D.2).",
    "cannotCut": "The 10 diagnostic questions of «Direct to the Jugular» in exact order. Have the group write them down.",
    "driverAlert": null,
    "discussionQuestions": [
      "Which of the three criteria for successful evangelism is most often overlooked?",
      "Which diagnostic closing question do you find most challenging to ask?"
    ],
    "commonObjections": [
      {
        "objection": "«Isn't asking 'how far along are you' putting too much pressure on someone?»",
        "response": "It is diagnostic, not coercive. It allows the person to say «I am still very far», which is invaluable feedback."
      },
      {
        "objection": "«Isn't leading someone through a set sequence manipulative?»",
        "response": "Every question allows a «no». And to every «no», you respond «why not?». It is designed for active listening, not cornering."
      }
    ],
    "workbookRef": "What is Successful Evangelism? • Direct to the Jugular • Dinner Discussions.",
    "vueltaRef": "",
    "pageNumber": 19,
    "visualData": null
  },
  {
    "id": 13,
    "number": 13,
    "title": "The Evidence for the Resurrection",
    "workbookChapter": "The Resurrection",
    "objective": "Equip students with the historical lines of evidence and show why this is the foundational question of the eight.",
    "whatDrPeterPresents": "«Christianity stands or falls on the claim that Jesus Christ rose from the dead» (Ludovic Kennedy / 1 Cor 15:14). Five historical evidences:\n1. Certified death by Roman executioners (John 19:34; swoon theory is impossible)\n2. The empty tomb (if enemies had the body, they would have produced it)\n3. Post-resurrection appearances to over 500 witnesses (not group hallucination)\n4. Rapid expansion of the church in Jerusalem\n5. Radically transformed lives of the disciples.",
    "cannotCut": "Pairing each historical evidence with its corresponding skeptical objection. Presenting evidence without anticipating objections leaves students vulnerable.",
    "driverAlert": null,
    "discussionQuestions": [
      "Why is the physical resurrection so essential to Christian faith?",
      "Summarize the strongest historical evidences for the resurrection."
    ],
    "commonObjections": [
      {
        "objection": "«The Gospels were written by biased partisans.»",
        "response": "Module 19 covers manuscript reliability. Note and defer."
      },
      {
        "objection": "«Mass hallucinations happen all the time.»",
        "response": "Hallucinations reflect prior wishful expectation. The disciples did not expect resurrection; they were in despair."
      }
    ],
    "workbookRef": "The Resurrection.",
    "vueltaRef": "Turn: Part D.1, Item 5",
    "pageNumber": 20,
    "visualData": {
      "type": "cards3",
      "title": "Five Historical Evidences",
      "cards": [
        {
          "title": "1. Death certified by Roman soldiers",
          "ref": "John 19:34; Mark 15:44-45"
        },
        {
          "title": "2. The empty tomb and missing body",
          "ref": "Luke 24:1-3"
        },
        {
          "title": "3. Post-resurrection appearances (>500)",
          "ref": "1 Cor 15:6; Luke 24:36-43"
        },
        {
          "title": "4. Rapid explosion of early church",
          "ref": "Acts 2:41; 4:4"
        },
        {
          "title": "5. Disciples' transformed lives",
          "ref": "John 20:19-22; Acts 4:13"
        }
      ]
    }
  },
  {
    "id": 14,
    "number": 14,
    "title": "How Can Miracles Be Possible?",
    "workbookChapter": "How Can Miracles Be Possible?",
    "objective": "Dismantle the philosophical objection to miracles before debating historical evidence.",
    "whatDrPeterPresents": "«Denying miracles is simply denying God Himself.» Four common responses:\n1. «No evidence they occurred»: Point to biblical miracles verified by multiple eyewitnesses.\n2. «Natural explanations»: Some events are providential timing, but many defy natural law.\n3. «Miracles cannot happen»: This is philosophical prejudice, not science. Scientific laws describe nature; they do not dictate what God can do.\n4. «I have never seen one»: We believe countless historical events on credible testimony without seeing them personally.",
    "cannotCut": "The third response: distinguishing between empirical evidence and prior philosophical commitment.",
    "driverAlert": null,
    "discussionQuestions": [
      "Why did Jesus perform miracles?",
      "What is the primary objection to miracles in your sphere, and why?"
    ],
    "commonObjections": [
      {
        "objection": "«If miracles exist, why don't we see them openly today?»",
        "response": "Do not get sidetracked by cessationist debates. Ask: what kind of evidence would you actually accept?"
      },
      {
        "objection": "«Faith healings are just the placebo effect.»",
        "response": "Some may be psychological. But a decomposed body returning to life after three days is not a placebo candidate."
      }
    ],
    "workbookRef": "How Can Miracles Be Possible?",
    "vueltaRef": "Turn: Part D.1, Item 5",
    "pageNumber": 21,
    "visualData": null
  },
  {
    "id": 15,
    "number": 15,
    "title": "Is Christ the Only Way to God?",
    "workbookChapter": "Is Christ the Only Way to God?",
    "objective": "Show that the exclusivity of Christ is not Christian arrogance, but the direct consequence of Jesus' identity.",
    "whatDrPeterPresents": "We live in a pluralistic global village where exclusive claims sound narrow-minded. But world religions make contradictory claims about God, sin, and salvation.\n\nJesus' own claims: He called Himself I AM, forgave sins, accepted worship, and declared He would judge the world. The people crucified Him because He claimed to be God.\n\nC.S. Lewis' trilemma (quadrilemma): Jesus is either a Liar, a Lunatic, a Legend, or the Lord.",
    "cannotCut": "The logical sequence: exclusivity is not an attack on other faiths; it is the unavoidable consequence of who Jesus is. Plus Lewis' four options.",
    "driverAlert": null,
    "discussionQuestions": [
      "What fundamentally differentiates Christianity from every other world faith?",
      "On what biblical and historical evidence does Christ's deity rest?"
    ],
    "commonObjections": [
      {
        "objection": "«What about moral, devout people in other religions?»",
        "response": "Covered in Modules 16 and 17. Note and defer."
      },
      {
        "objection": "«Jesus never explicitly said 'I am God'.»",
        "response": "Look at the reactions: if He didn't claim deity, why did religious leaders charge Him with blasphemy and demand His execution?"
      }
    ],
    "workbookRef": "Is Christ the Only Way to God?",
    "vueltaRef": "Turn: Part D.1, Item 2",
    "pageNumber": 22,
    "visualData": null
  },
  {
    "id": 16,
    "number": 16,
    "title": "What About Those Who Have Never Heard?",
    "workbookChapter": "Same title in workbook",
    "objective": "Train students to answer with biblical precision, distinguishing what Scripture reveals from what it leaves in God's hands.",
    "whatDrPeterPresents": "«In short: We do not know! The secret things belong to the Lord our God (Deut 29:29).»\n\nFour biblical pillars:\n1. God's absolute justice and mercy (Gen 18:25)\n2. General revelation leaves all humanity without excuse (Rom 1:20)\n3. Old Testament figures were saved through Christ's sacrifice retrospectively (Rom 3:25)\n4. Genuine seekers who seek God will find Him (Matt 7:7).\n\nGod is righteous; no one will be treated unfairly on Judgment Day.",
    "cannotCut": "Deuteronomy 29:29 and the phrase «we do not know». Acknowledging the limit of revelation is the correct answer here.",
    "driverAlert": "⚠ Facilitation Alert: Recognizing our limits is essential. Do not pretend to know what Scripture has not revealed.",
    "discussionQuestions": [
      "Can anyone be saved apart from Christ?",
      "What does the Bible teach about those who never heard the gospel?"
    ],
    "commonObjections": [
      {
        "objection": "«Then God is unjust.»",
        "response": "Injustice would be receiving worse than one deserves. The biblical mystery is not why some perish, but why anyone is saved."
      },
      {
        "objection": "«Then it's better not to preach so people aren't held accountable.»",
        "response": "Scripture teaches that general revelation already holds everyone accountable; the gospel is God's rescue."
      }
    ],
    "workbookRef": "What About Those Who Have Never Heard?",
    "vueltaRef": "Turn: Part D.1, Item 6",
    "pageNumber": 23,
    "visualData": null
  },
  {
    "id": 17,
    "number": 17,
    "title": "Won't a Good Moral Life Get Me to Heaven?",
    "workbookChapter": "Same title in workbook",
    "objective": "Dismantle moral self-righteousness («religion of doing») and replace it with grace («religion of done»).",
    "whatDrPeterPresents": "Popular culture imagines hell is reserved only for monsters like Hitler or Stalin. But Scripture establishes that our acceptance before God is based on His mercy, not our performance.\n\nFive biblical truths:\n1. The reality of judgment (Heb 9:27)\n2. The passing grade is perfection: «Be perfect as your Father in heaven is perfect» (Matt 5:48; Jas 2:10)\n3. Universal sinfulness (Eccl 7:20; Isa 64:6)\n4. Christ's sinless perfection (2 Cor 5:21)\n5. Salvation by grace through faith alone (Eph 2:8-9).\n\n«Good people don't go to heaven, because nobody is good enough. People who think they are good go to hell. Sinners who ask for mercy go to heaven.»",
    "cannotCut": "Point 2: The passing grade is perfection. Without this, the listener continues comparing themselves to others.",
    "driverAlert": null,
    "discussionQuestions": [
      "Why do so many people assume salvation is based on good deeds?",
      "How would you explain the concept of grace to someone who relies on personal morality?"
    ],
    "commonObjections": [
      {
        "objection": "«This removes all motivation for doing good.»",
        "response": "Eph 2:10 follows immediately after 2:8-9: good works are the fruit, not the root of salvation."
      },
      {
        "objection": "«My grandfather was the kindest man I ever knew; is he in hell?»",
        "response": "Do not debate. This is grief, not an intellectual argument. Reassure that God alone is the Judge."
      }
    ],
    "workbookRef": "Won't a Good Moral Life Get Me to Heaven?",
    "vueltaRef": "Turn: Part D.1, Item 7",
    "pageNumber": 24,
    "visualData": null
  },
  {
    "id": 18,
    "number": 18,
    "title": "Why Suffering?",
    "workbookChapter": "Why Suffering?",
    "objective": "Provide Christian responses to the problem of pain, while teaching pastoral sensitivity to personal suffering.",
    "whatDrPeterPresents": "Christianity offers substantial (though incomplete) answers:\n- God created a good world, and humanity rebelled (Gen 3)\n- Natural decay and fallen creation affect everyone (Rom 8:20)\n- Not all suffering is directly proportional to personal sin (Luke 13:2-5)\n- God delays final judgment to allow time for repentance (2 Pet 3:9)\n- Christ suffered on the cross to rescue us (Isa 53).",
    "cannotCut": "The closing pastoral note: suffering is never merely academic. Treat the inquirer with gentleness and reverence (1 Pet 3:15).",
    "driverAlert": "⚠ Pastoral Alert: High probability that someone in the room is grieving or facing illness. State upfront that no one is pressured to speak. If personal pain surfaces, stop the clock: the person matters more than the schedule.",
    "discussionQuestions": [
      "Which perspective on suffering brings the greatest comfort?",
      "What is the best pastoral response when someone shares deep personal pain?"
    ],
    "commonObjections": [
      {
        "objection": "«Philosophy doesn't comfort someone in grief.»",
        "response": "Agreed. Intellectual arguments address the mind; grief requires compassionate presence and silent love."
      },
      {
        "objection": "«Free will explains war, but not pediatric cancer.»",
        "response": "A profound objection. The biblical answer is that the entire cosmos was fractured by the fall, not just human will."
      }
    ],
    "workbookRef": "Why Suffering?",
    "vueltaRef": "Turn: Part D.1, Item 1",
    "pageNumber": 25,
    "visualData": null
  },
  {
    "id": 19,
    "number": 19,
    "title": "Isn't the Bible Full of Errors?",
    "workbookChapter": "Same title in workbook",
    "objective": "Provide foundational evidence for the textual transmission and reliability of the Bible.",
    "whatDrPeterPresents": "Four sequential questions:\n1. Did the events actually happen? (Eyewitness testimony, 1 Cor 15:6)\n2. Was the message distorted before being written down? (Oral tradition in Jewish memorization culture)\n3. Is what we have today what was originally penned? (Dead Sea Scrolls at Qumran, Rylands papyrus P52, 24,000+ manuscripts)\n4. Are there contradictions? (Gospel variations confirm independent eyewitness accounts rather than collusion).",
    "cannotCut": "The Dead Sea Scrolls discovery and the 24,000 New Testament manuscript witnesses.",
    "driverAlert": null,
    "discussionQuestions": [
      "How reliable are the New Testament historical documents compared to classical antiquity?",
      "What do extra-biblical ancient sources (Tacitus, Josephus, Pliny) tell us about Jesus?"
    ],
    "commonObjections": [
      {
        "objection": "«The Gospels contradict each other on details.»",
        "response": "Use legal courtroom testimony: total identity of wording suggests collusion; minor perspectival variation confirms authentic independent eyewitnesses."
      },
      {
        "objection": "«The Bible was edited and altered at the Council of Nicaea.»",
        "response": "The John Rylands papyrus dates to the early 2nd century — two hundred years before Nicaea."
      }
    ],
    "workbookRef": "Isn't the Bible Full of Errors?",
    "vueltaRef": "Turn: Part D.1, Item 3",
    "pageNumber": 26,
    "visualData": null
  },
  {
    "id": 20,
    "number": 20,
    "title": "Isn't Christian Experience Merely Psychological?",
    "workbookChapter": "Same title in workbook",
    "objective": "Anchor assurance of faith in objective historical facts rather than subjective emotional fluctuations.",
    "whatDrPeterPresents": "Voltaire's quip: «If God did not exist, it would be necessary to invent Him.» Our faith does not rely on subjective emotional warmth.\n\nThe Three-Legged Stool of Christian Assurance:\n1. Internal witness of the Holy Spirit (Rom 8:16)\n2. Faith in Christ's bodily resurrection as historical fact (Rom 10:9)\n3. Transformed life marked by love and obedience (1 John 3:18-19).\n\nThree psychological reductionisms:\n- «You were just raised that way!»\n- «You only believe for the emotional crutch!»\n- «You are nothing more than brain chemistry and Skinnerian conditioning.»",
    "cannotCut": "The distinction between how someone came to believe vs whether the belief itself is historically true. Plus uncovering the hidden psychological agenda of the skeptic.",
    "driverAlert": null,
    "discussionQuestions": [
      "How would you answer someone who claims belief is merely social conditioning?",
      "What is the biblical relationship between faith, facts, and emotions?"
    ],
    "commonObjections": [
      {
        "objection": "«Isn't turning the question around just deflecting the issue?»",
        "response": "The turn exposes that the reductionist objection proves too much: if all thought is chemistry, the skeptic's argument is also just chemistry."
      },
      {
        "objection": "«I just feel God in my heart; that's all I need.»",
        "response": "Feelings are one leg of the stool, but not the floor. Ground your feelings in the objective resurrection."
      }
    ],
    "workbookRef": "Isn't Christian Experience Merely Psychological?",
    "vueltaRef": "Turn: Part D.1, Item 4",
    "pageNumber": 27,
    "visualData": {
      "type": "cards3",
      "title": "The Three-Legged Stool of Assurance",
      "cards": [
        {
          "title": "Leg 1: Internal Witness of the Spirit",
          "ref": "Rom 8:16; 2 Cor 1:22"
        },
        {
          "title": "Leg 2: Bodily Resurrection of Christ",
          "ref": "John 5:24; Rom 10:9; 1 John 5:9-13"
        },
        {
          "title": "Leg 3: Reality of a Transformed Life",
          "ref": "1 John 3:18-19; 5:2"
        }
      ]
    }
  }
];

export const PARTE_D_EN = {
  "title": "Part D — Reference",
  "subtitle": "Facilitator tools, diagnostic outlines, and technical notes",
  "d1": {
    "title": "D.1 Turning the Questions Around",
    "intro": "Our goal is not to win arguments, but to win people. Most lethal questions can be turned around so that Jesus returns to center stage. These scripts are taken verbatim from the workbook:",
    "turns": [
      {
        "id": 1,
        "question": "Why does God permit suffering?",
        "script": "«The problem of suffering is difficult; but ultimately God will put an end to all suffering by creating a new heaven and a new earth. However, before that happens, Jesus must return to judge. When He does, it will be too late for anyone to change sides. That is why God delays: He does not want to end history before everyone has had an opportunity to repent. Perhaps you are one of the people He is waiting for. Don't you think it's time you did something about it?»",
        "references": "2 Thess 1:8-10; 2 Pet 3:9",
        "moduleRef": 18
      },
      {
        "id": 2,
        "question": "How can Christ be the only way to God?",
        "script": "«You need to realize that Christianity and other world religions are mutually exclusive. At most, one can be true. If Christ is who He claimed to be, then all other paths, however sincere, are mistaken. I believe Christ is the only way because that is what He claimed, and because the historical evidence of His life, death, and resurrection proves He is God. Who do you think He was?»",
        "references": "John 3:16-18",
        "moduleRef": 15
      },
      {
        "id": 3,
        "question": "Isn't the Bible full of errors?",
        "script": "«Jesus believed the Scriptures. He placed His stamp of authority on the Old Testament and commissioned the writing of the New Testament. I accept His verdict, and I have yet to hear any convincing argument to the contrary. If you know of one, I'd love to hear it — and also know why you doubt Christ's word.»",
        "references": "2 Tim 3:16-17",
        "moduleRef": 19
      },
      {
        "id": 4,
        "question": "Isn't Christian experience merely psychological?",
        "script": "«I am a Christian because I believe Jesus Christ is God incarnate, based on the historical evidence of His resurrection. Psychology cannot explain that away. But I wonder if there might be a psychological reason why you choose not to believe: would it be fair to say that if you became a Christian, certain things in your life would have to change?»",
        "references": "Rom 1:18-20",
        "moduleRef": 20
      },
      {
        "id": 5,
        "question": "How can miracles happen?",
        "script": "«I believe miracles are possible because I believe God exists. If God created the universe from nothing, a miracle is child's play for Him. What matters is that Jesus' miracles authenticated His identity as the Son of God. How do you explain the historical events of His life?»",
        "references": "1 John 4:2-3",
        "moduleRef": 14
      },
      {
        "id": 6,
        "question": "What about those who have never heard?",
        "script": "«It's a tough question, but ultimately it's God's responsibility, not ours. He is the righteous Judge. But the Bible is crystal clear about the destiny of those who HAVE heard the gospel and chosen not to believe — and that is the category you are in, isn't it? What about you?»",
        "references": "Rom 1:20",
        "moduleRef": 16
      },
      {
        "id": 7,
        "question": "Won't a good moral life get me to heaven?",
        "script": "«Yes, a good moral life will get you to heaven — provided it is as perfect as the life of Jesus. Christians don't believe they are good people; they acknowledge they are sinners whose only hope is God's mercy through Christ. That is my position. What about you — do you meet the standard?»",
        "references": "Rom 3:23; 6:23",
        "moduleRef": 17
      }
    ],
    "keyMechanism": "The turns are not arguments to defeat someone: each concludes with a question turned back to the person. If you omit the concluding question, the turn fails."
  },
  "d2": {
    "title": "D.2 Direct to the Jugular",
    "description": "If you sense someone is near a decision, do not hesitate. Each question opens the next; to any «no», gently ask «why not?»",
    "questions": [
      "1. Have you ever considered becoming a Christian?",
      "2. Have you arrived yet, or are you still on the journey?",
      "3. How far along the road would you say you are? (open-ended)",
      "4. What do you think is holding you back? (identifies the roadblock)",
      "5. Do you want to become a Christian?",
      "6. Are you ready to become a Christian?",
      "7. Would you like to become a Christian right now?",
      "8. Do you believe Jesus died on the cross and rose from the dead?",
      "9. Do you believe He died for you personally, for your sins?",
      "10. Would you like to pray right now to make Him your Lord and Savior?"
    ],
    "note": "The workbook provides a model sinner's prayer. Use it as a guide, not a formula."
  },
  "d3": {
    "title": "D.3 The Engel Scale",
    "description": "The most pastorally encouraging diagram of the course: conversion is a journey from initial awareness to spiritual reproduction.",
    "steps": [
      {
        "score": "-10",
        "label": "Awareness of the supernatural"
      },
      {
        "score": "-9",
        "label": "No effective knowledge of Christianity"
      },
      {
        "score": "-8",
        "label": "Initial awareness of Christianity"
      },
      {
        "score": "-7",
        "label": "Interest in Christianity"
      },
      {
        "score": "-6",
        "label": "Awareness of basic gospel facts"
      },
      {
        "score": "-5",
        "label": "Grasp of gospel implications"
      },
      {
        "score": "-4",
        "label": "Positive attitude toward the gospel"
      },
      {
        "score": "-3",
        "label": "Awareness of personal need"
      },
      {
        "score": "-2",
        "label": "Challenge and decision to act"
      },
      {
        "score": "-1",
        "label": "Repentance and faith"
      },
      {
        "score": "0",
        "label": "Regeneration (New Birth)",
        "isZero": true
      },
      {
        "score": "+1",
        "label": "Post-decision evaluation"
      },
      {
        "score": "+2",
        "label": "Integration into local church body"
      },
      {
        "score": "+3",
        "label": "Ongoing discipleship & spiritual reproduction"
      }
    ],
    "quote": "«It can be a tremendous achievement to move an atheist to open agnosticism (perhaps from -10 to -7), or an agnostic to understand the gospel (say from -9 to -5). In neither case are they converted, but their understanding has made a huge leap.»",
    "pastoralUse": "Use this whenever a facilitator is discouraged. It is the most pastoral tool in the curriculum."
  },
  "d4": {
    "title": "D.4 John Chapman's Gospel Outline",
    "author": "The Five Headings of John Chapman",
    "description": "As they appear in the workbook. Memorize them.",
    "headings": [
      {
        "tag": "GOD THE RULER",
        "color": "bg-blue-600",
        "content": "God really exists. He created the universe and rules over it, and He made you and me to enjoy a personal relationship with Him. We know this because He has clearly revealed Himself: through creation, through His dealings with Israel, and most perfectly through Jesus Christ, God the Son.",
        "verses": "Acts 2:32; 17:26-27; Heb 1:1-2"
      },
      {
        "tag": "PEOPLE IN REBELLION",
        "color": "bg-amber-600",
        "content": "None of us has lived as though this were the true reality. All of us have assumed the right to run our own lives. Sometimes we have actively disobeyed God; other times we have simply ignored Him. Both amount to the same thing: rebellion.",
        "verses": "Mark 7:21-23; Rom 3:12; 3:23"
      },
      {
        "tag": "GOD RESCUES",
        "color": "bg-emerald-600",
        "content": "Yet God loves us and desires to rescue us. That is why He sent His Son, Jesus Christ. By dying on the cross, Jesus took the penalty we deserved and made it possible for our broken relationship with God to be restored.",
        "verses": "Matt 4:17; John 3:16; Acts 17:30; Gal 1:3-4"
      },
      {
        "tag": "WHAT IF I REJECT? (SEPARATED)",
        "color": "bg-rose-600",
        "content": "If we reject or ignore God's offer of forgiveness and reconciliation, we have no hope. We will face God's righteous judgment and receive what we truly deserve.",
        "verses": "John 3:18; Rom 1:18; 2 Thess 1:8-9; Rev 20:15"
      },
      {
        "tag": "WHAT IF I RECEIVE? (RECONCILED)",
        "color": "bg-teal-600",
        "content": "If we turn from our rebellion and place our lives under Christ's lordship, God treats us as if we had never rebelled. He forgives us and gives us the Holy Spirit. The choice is ours.",
        "verses": "John 3:16; 5:24; Rom 6:23; Acts 2:38; Col 2:13"
      }
    ],
    "usageNote": "In Module 6, the outline is used twice: first presenting without it in two minutes, and then presenting with it. The contrast is the lesson."
  },
  "d5": {
    "title": "D.5 Notes for the Editorial Team",
    "description": "Standardized terminology, scripture citations, and print advisory",
    "items": [
      {
        "title": "Terminology Base",
        "text": "This guide follows the nomenclature of the Spanish and English workbooks published by the Christian Medical Fellowship (CMF) UK and ICMDA."
      },
      {
        "title": "Scripture References",
        "text": "Scripture citations follow standard international abbreviations: John, Rom, Matt, Acts, Luke, Rev, Ps, 2 Cor, 1 Cor, Isa, Heb, 1 John, Mark, Gen, Eph, Phil, 2 Thess, 1 Tim, 2 Tim, 1 Pet, 2 Pet, Col, Titus, Gal, Prov."
      },
      {
        "title": "Chapters, not Page Numbers",
        "text": "Cross-references cite chapter titles rather than page numbers, as pagination varies with each print layout."
      }
    ],
    "colophon": "Confident Christianity — Facilitator's Guide. ICMDA Training Unit. Course Material © Christian Medical Fellowship 2005. Revised international edition, 2026."
  }
};
