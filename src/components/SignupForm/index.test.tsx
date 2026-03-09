// import { render, screen } from "@testing-library/react";
// import SignupForm from ".";

// test("signup form test", () => {
//   render(<SignupForm />);

//   const emailInput = screen.getByLabelText("이메일");
//   const passwordInput = screen.getByLabelText("비밀번호");
//   const passwordConfirmInput = screen.getByLabelText("비밀번호 확인");

//   expect(emailInput).toBeInTheDocument();
//   expect(passwordInput).toBeInTheDocument();
//   expect(passwordConfirmInput).toBeInTheDocument();

//   const passwordByPlaceholder = screen.getByPlaceholderText("비밀번호");
//   const passwordConfirmByPlaceholder =
//     screen.getByPlaceholderText("비밀번호 확인");

//   expect(passwordByPlaceholder).toHaveAttribute("type", "password");
//   expect(passwordConfirmByPlaceholder).toHaveAttribute("type", "password");

//   const signupButton = screen.getByRole("button", { name: "회원가입" });
//   expect(signupButton).toBeInTheDocument();
// });
