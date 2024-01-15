import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render initial count value", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
});
