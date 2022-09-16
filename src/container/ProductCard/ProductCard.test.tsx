import { render, screen } from "@testing-library/react";
import { ProductCardProps, productImageUrl } from "./ProductCard";

import { DefaultProductCard, NoImageProductCard } from "./ProductCard.stories";

test("should render product card", () => {
  const { container } = render(
    <DefaultProductCard {...(DefaultProductCard.args as ProductCardProps)} />
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("should render product card default props", () => {
  const onClick = jest.fn();

  render(
    <DefaultProductCard
      {...(DefaultProductCard.args as ProductCardProps)}
      onClick={onClick}
    />
  );

  const productImg = screen.getByTestId("image");

  const category = screen.getByTestId("category");
  const title = screen.getByTestId("title");
  const description = screen.getByTestId("description");
  const price = screen.getByTestId("price");
  const fullPrice = screen.getByTestId("full-price");
  const btn = screen.getByTestId("btn");

  expect(productImg.getAttribute("src")).toBe(
    DefaultProductCard.args?.productImageUrl
  );

  expect(category.textContent).toBe(DefaultProductCard.args?.category);
  expect(title.textContent).toBe(DefaultProductCard.args?.title);
  expect(description.textContent).toBe(DefaultProductCard.args?.description);
  expect(price.textContent).toBe(`$${DefaultProductCard.args?.price}`);
  expect(fullPrice.textContent).toBe(`$${DefaultProductCard.args?.fullPrice}`);
  expect(btn.textContent).toBe("Add to Cart");

  btn.click();

  expect(onClick).toBeCalled();
});

test("should render product card default props", () => {
  render(
    <NoImageProductCard {...(NoImageProductCard.args as ProductCardProps)} />
  );

  const productImg = screen.getByTestId("image");

  expect(productImg.getAttribute("src")).toBe(productImageUrl);
});
