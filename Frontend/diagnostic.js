/* ── Claria Productivity Decision Engine ────────────────────
   JSON-driven diagnostic. 12 questions, 4 categories.
   Each answer adds weighted points to one category.
   Highest score = primary blocker → structured recommendation.
──────────────────────────────────────────────────────────── */

const DIAGNOSTIC = {
  sections: [
    {
      id: 'consistency',
      label: 'Execution Pattern',
      icon: '◎',
      color: '#7c5cfc',
      questions: [
        {
          id: 'q1', text: 'How many days per week do you actually write code?',
          options: [
            { label: '5 – 7 days',  score: 0 },
            { label: '2 – 4 days',  score: 2 },
            { label: '0 – 1 day',   score: 5 },
          ],
        },
        {
          id: 'q2', text: 'How many unfinished side projects do you have right now?',
          options: [
            { label: '0 – 1',  score: 0 },
            { label: '2 – 3',  score: 2 },
            { label: '4 or more', score: 4 },
          ],
        },
        {
          id: 'q3', text: 'Do you follow a consistent weekly learning schedule?',
          options: [
            { label: 'Yes, consistently',  score: 0 },
            { label: 'Sometimes',          score: 2 },
            { label: 'Not really',         score: 4 },
          ],
        },
      ],
    },
    {
      id: 'skill',
      label: 'Skill Depth',
      icon: '⬡',
      color: '#34d399',
      questions: [
        {
          id: 'q4', text: 'Can you confidently explain closures, async/await, and the DOM?',
          options: [
            { label: 'Yes, confidently',   score: 0 },
            { label: 'Partially',          score: 2 },
            { label: 'Not really',         score: 5 },
          ],
        },
        {
          id: 'q5', text: 'Can you build a small working app without a tutorial?',
          options: [
            { label: 'Yes, from scratch',  score: 0 },
            { label: 'With minor help',    score: 2 },
            { label: 'I need tutorials',   score: 4 },
          ],
        },
        {
          id: 'q6', text: 'When you get stuck on a bug, what do you usually do?',
          options: [
            { label: 'Debug independently first', score: 0 },
            { label: 'Google immediately',        score: 2 },
            { label: 'Leave the task for later',  score: 4 },
          ],
        },
      ],
    },
    {
      id: 'burnout',
      label: 'Mental State',
      icon: '◐',
      color: '#f472b6',
      questions: [
        {
          id: 'q7', text: 'Do you feel overwhelmed by the number of frontend tools to learn?',
          options: [
            { label: 'No, I handle it fine',     score: 0 },
            { label: 'Sometimes',                score: 2 },
            { label: 'Constantly overwhelmed',   score: 5 },
          ],
        },
        {
          id: 'q8', text: 'How often do you compare your progress to other developers?',
          options: [
            { label: 'Rarely',      score: 0 },
            { label: 'Sometimes',   score: 2 },
            { label: 'Every day',   score: 4 },
          ],
        },
        {
          id: 'q9', text: 'Do you feel mentally drained before you even start coding?',
          options: [
            { label: 'No',           score: 0 },
            { label: 'Occasionally', score: 2 },
            { label: 'Frequently',   score: 5 },
          ],
        },
      ],
    },
    {
      id: 'direction',
      label: 'Direction & Strategy',
      icon: '◈',
      color: '#fbbf24',
      questions: [
        {
          id: 'q10', text: 'Do you have a clear 3-month learning or career roadmap?',
          options: [
            { label: 'Yes, written out',    score: 0 },
            { label: 'A rough idea',        score: 2 },
            { label: 'No plan',             score: 5 },
          ],
        },
        {
          id: 'q11', text: 'How focused are you on a specific tech stack right now?',
          options: [
            { label: 'Focused on one stack',      score: 0 },
            { label: 'Splitting between 2',       score: 2 },
            { label: 'Jumping between stacks',    score: 4 },
          ],
        },
        {
          id: 'q12', text: 'Do you know exactly what job role or outcome you\'re working toward?',
          options: [
            { label: 'Yes, very clearly',    score: 0 },
            { label: 'Roughly, not fully',   score: 2 },
            { label: 'Not at all',           score: 5 },
          ],
        },
      ],
    },
  ],

  results: {
    consistency: {
      label: 'Consistency Blocker',
      headline: 'Your biggest issue is showing up.',
      summary: 'You have potential but irregular execution is killing your momentum. The gap between knowing and doing is costing you weeks of compounded progress.',
      badge: { text: 'Execution', color: '#7c5cfc' },
      actions: [
        { icon: '◎', title: 'Daily coding minimum', body: 'Commit to 30 minutes of actual coding every day — no tutorials, no reading. Just building.' },
        { icon: '◑', title: 'Kill half your projects', body: 'Pick your one best project and archive the rest. Multi-project paralysis is the #1 consistency killer.' },
        { icon: '▣', title: 'Time-block your sessions', body: 'Put a recurring calendar block for your coding session. Treat it like a client meeting you cannot cancel.' },
        { icon: '◈', title: 'Track streaks, not hours', body: 'Use Claria\'s focus tracker daily. A visible streak creates psychological commitment that hours never do.' },
      ],
    },
    skill: {
      label: 'Skill Gap',
      headline: 'Your foundations need reinforcement.',
      summary: 'You are building on shaky ground. Gaps in core JavaScript concepts slow everything down — every new framework or tool will feel harder than it should.',
      badge: { text: 'Skill Depth', color: '#34d399' },
      actions: [
        { icon: '⬡', title: 'Master the JS fundamentals', body: 'Spend 2 weeks on closures, prototypes, the event loop, and async patterns before touching any framework.' },
        { icon: '◎', title: 'Build, don\'t watch', body: 'For every tutorial you watch, build a different version from scratch. Consumption without creation creates false confidence.' },
        { icon: '◑', title: 'Debug before you Google', body: 'Force yourself to spend 10 minutes debugging independently before searching. This alone doubles your problem-solving speed.' },
        { icon: '▣', title: 'Use the snippet vault', body: 'Every time you solve a hard problem, save the pattern in Claria\'s snippet vault. You\'ll build a personal reference library fast.' },
      ],
    },
    burnout: {
      label: 'Burnout Risk',
      headline: 'You are running on empty.',
      summary: 'Mental fatigue and social comparison are quietly draining your capacity to work. This is a sustainability problem — you can\'t code your way out of burnout by coding more.',
      badge: { text: 'Mental Health', color: '#f472b6' },
      actions: [
        { icon: '◐', title: 'Unfollow the comparison trap', body: 'Mute or unfollow developer accounts that make you feel behind. Your timeline is your timeline, full stop.' },
        { icon: '◎', title: 'Shorter, protected sessions', body: 'Use Claria\'s focus timer for 25-minute sessions only. End on time. Recovery is part of the system.' },
        { icon: '⬡', title: 'Celebrate micro-wins', body: 'After every session, write one thing you completed. Progress visibility is the antidote to overwhelm.' },
        { icon: '◈', title: 'Pick one technology this month', body: 'Choose one tool and go deep. Learning breadth when you\'re burned out is the fastest route to quitting.' },
      ],
    },
    direction: {
      label: 'Direction Gap',
      headline: 'You are busy but not going anywhere.',
      summary: 'You are spending energy without a target. Unfocused effort creates the feeling of working hard while actually spinning in place. A clear direction multiplies every hour you invest.',
      badge: { text: 'Strategy', color: '#fbbf24' },
      actions: [
        { icon: '◈', title: 'Write your 90-day target', body: 'Answer this: what specific role or project outcome do you want in 90 days? Write it down and put it somewhere visible.' },
        { icon: '⬡', title: 'Choose one stack and commit', body: 'React or Vue. TypeScript or vanilla. Pick one combination and do not evaluate alternatives for 60 days.' },
        { icon: '◎', title: 'Reverse-engineer the job description', body: 'Find 3 real job postings for the role you want. List every skill they require. That list is your roadmap.' },
        { icon: '▣', title: 'Weekly strategy review', body: 'Every Sunday, spend 10 minutes in Claria reviewing your tasks. Ask: did this move me toward my 90-day target?' },
      ],
    },
  },
};
