import { computed, inject, onMounted, provide, reactive } from "vue";

const SECS_PER_QUESTION = 30;
const QUIZ_SYMBOL = Symbol("QuizContext");

export function useProvideQuiz() {
  //State equivalent to useReducer/initialState
  const state = reactive({
    questions: [],
    status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
  });

  // Derived State (Equivalent to numQuestions and maxPossiblePoints)
  const numQuestions = computed(() => state.questions.length);
  const maxPossiblePoints = computed(() =>
    state.questions.reduce((prev, cur) => prev + cur.points, 0),
  );

  const actions = {
    async fetchData() {
      try {
        const res = await fetch("http://localhost:8001/questions");
        const data = await res.json();
        state.questions = data;
        state.status = "ready";
      } catch (err) {
        state.status = "error";
      }
    },

    start() {
      state.status = "active";
      state.secondsRemaining = state.questions.length * SECS_PER_QUESTION;
    },

    newAnswer(payload) {
      const question = state.questions[state.index];
      state.answer = payload;
      if (payload === question.correctOption) {
        state.points += question.points;
      }
    },

    nextQuestion() {
      state.index++;
      state.answer = null;
    },

    finish() {
      state.status = "finished";
      if (state.points > state.highscore) {
        state.highscore = state.points;
      }
    },

    restart() {
      state.status = "ready";
      state.index = 0;
      state.answer = null;
      state.points = 0;
      state.secondsRemaining = null;
    },

    tick() {
      console.log("tick");
      state.secondsRemaining--;
      if (state.secondsRemaining === 0) {
        state.status = "finished";
      }
    },
  };

  onMounted(() => {
    actions.fetchData();
  });

  const contextValue = {
    state,
    numQuestions,
    maxPossiblePoints,
    ...actions,
  };

  provide(QUIZ_SYMBOL, contextValue);
  return contextValue;
}

export function useQuiz() {
  const context = inject(QUIZ_SYMBOL);
  if (!context) {
    throw new Error("useQuiz must be used within a component that calls useProvideQuiz");
  }
  return context;
}
