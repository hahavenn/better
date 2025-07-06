import type { UserGoal } from "~/stores/goals/types";

const goalIdKey = Symbol() as InjectionKey<UserGoal["id"]>;
export { goalIdKey };
