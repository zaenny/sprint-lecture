import { render, screen } from "@testing-library/react";
import ProductItem from ".";

test("현재 상품의 title과 description에 입력한 내용이 제대로 렌더링이 되는지 확인하기", () => {
  render(<ProductItem title="아이폰" description="애플 스마트폰" isSoldOut />);

  const titleByLabelText = screen.getByText("아이폰");
  const descriptionByLabelText = screen.getByText("애플 스마트폰");

  expect(titleByLabelText).toBeInTheDocument();
  expect(descriptionByLabelText).toBeInTheDocument();
});

test("증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인하기", () => {
  render(<ProductItem title="아이폰" description="애플 스마트폰" />);

  const addButton = screen.getByRole("button", { name: "+" });
  const subtractButton = screen.getByRole("button", { name: "-" });
  const initial = screen.getByText(1);

  expect(addButton).toBeInTheDocument();
  expect(subtractButton).toBeInTheDocument();
  expect(initial).toBeInTheDocument();
});

test("구매하기 버튼이 존재하는지 확인하기", () => {
  render(<ProductItem title="아이폰" description="애플 스마트폰" />);

  const purchesButton = screen.getByRole("button", { name: "구매하기" });
  expect(purchesButton).toBeInTheDocument();
});

test("상품이 품절 상태(isSoldOut={true})일 때 “품절” 텍스트가 렌더링되는지 확인하기", () => {
  render(
    <ProductItem title="아이폰" description="애플 스마트폰" isSoldOut={true} />,
  );

  const textRender = screen.getByText("품절");
  expect(textRender).toBeInTheDocument();
});

test("5. 상품이 품절 상태(`isSoldOut={true}`)일 때 버튼이 비활성화(`disabled`)되고, CSS 클래스명에 `opacity-50`과 `cursor-not-allowed`가 포함되는지 확인하기", () => {
  render(
    <ProductItem title="아이폰" description="애플 스마트폰" isSoldOut={true} />,
  );

  const purchesButton = screen.getByRole("button", { name: "구매하기" });
  expect(purchesButton).toBeDisabled();
  expect(purchesButton).toHaveClass("opacity-50");
  expect(purchesButton).toHaveClass("cursor-not-allowed");
});
