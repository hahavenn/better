import type { UserGoal } from "~~/shared/types/goal/goal";

const goalIdKey = Symbol() as InjectionKey<UserGoal["id"]>;
export { goalIdKey };
