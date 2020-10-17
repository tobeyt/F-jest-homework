import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => ({
    acceptInjection: mockAcceptInjection,
    getHasAntibodies: mockGetHasAntibodies,
  }));
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    const vaccine = new VaccineTest();
    vaccine.inject();
    expect(mockAcceptInjection).toHaveBeenCalledWith(new Covid19Vaccine());
    expect(mockAcceptInjection).toHaveBeenCalledTimes(1);
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    const vaccine = new VaccineTest();
    mockGetHasAntibodies.mockReturnValue(true);
    const result = vaccine.test();
    expect(result).toBe("Vaccine Test Success");
    expect(mockGetHasAntibodies).toHaveBeenCalledTimes(1);
  });

  test("should get Failed if recipient has no antibodies", () => {
    const vaccine = new VaccineTest();
    mockGetHasAntibodies.mockReturnValue(false);
    const result = vaccine.test();
    expect(result).toBe("Vaccine Test Failed");
    expect(mockGetHasAntibodies).toHaveBeenCalledTimes(1);
  });
});
