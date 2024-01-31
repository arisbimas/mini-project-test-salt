import { useState } from "react";
import { ErrorListProps, FormItemCheckbox, FormItemPassword, FormItemText } from "../Common/FormItem";
import { Button } from "../Common/Button";

type FormData = {
    email: string;
    password: string;
    remember: boolean;
};

export default function LoginForm() {
    // State variables
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        remember: false,
    });
    const [errorList, setErrorList] = useState<ErrorListProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Get error message for a specific field
    const getErrorMessage = (fieldName: string) => {
        return errorList.filter((error: ErrorListProps) => error.nameField === fieldName);
    };

    // Validate email format
    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Perform login action
    const handleLogin = () => {
        setIsLoading(true);

        // TODO: Implement the code for the login API call or use setTimeout to simulate
        setTimeout(() => {
            alert("Login Success!");
            setIsLoading(false);
        }, 3000);
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorList([]);

        let isValid = true;

        // Validate email
        if (!formData.email) {
            setErrorList((prevErrors) => [
                ...prevErrors,
                { nameField: "email", errorText: "Please enter your email" },
            ]);
            isValid = false;
        } else if (!isEmailValid(formData.email)) {
            isValid = false;
            setErrorList((prevErrors) => [
                ...prevErrors,
                { nameField: "email", errorText: "Invalid email format" },
            ]);
        }

        // Validate password
        if (!formData.password) {
            isValid = false;
            setErrorList((prevErrors) => [
                ...prevErrors,
                { nameField: "password", errorText: "Please enter your password" },
            ]);
        }

        // If form is valid, perform login
        if (isValid) {
            handleLogin();
        }
    };

    return (
        <div className="wrapper-login-form">
            <div className="side-left">
                <div className="wrapper-content">
                    <div className="content">
                        <p className="title">Lorem ipsum dolor si amet</p>
                        <p className="sub-title">consectetur</p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="side-right">
                <div className="wrapper-content">
                    <div className="content">
                        <p className="title">Hello</p>
                        <p className="description">Enter your email and password to login.</p>

                        <form onSubmit={handleSubmit}>
                            <FormItemText
                                id="email"
                                label="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                errors={getErrorMessage("email")}
                            />
                            <FormItemPassword
                                id="password"
                                label="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                errors={getErrorMessage("password")}
                            />
                            <div className="section-remember-me-forgot-password">
                                <FormItemCheckbox
                                    id="remember"
                                    label="Remember me"
                                    checked={formData.remember}
                                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                                />
                                <a href="#" className="forgot-password">Forgot Password?</a>
                            </div>
                            <div className="section-buttons-login-signup">
                                <Button
                                    label="Login"
                                    type="submit"
                                    isLoading={isLoading}
                                    disabled={isLoading}
                                />
                                <Button
                                    label="Sign Up"
                                    className="button-signup"
                                    disabled={isLoading}
                                    variant="outline"
                                />
                            </div>
                            <div className="section-login-other">
                                <p className="title">Or, login with</p>
                                <div className="section-buttons">
                                    <Button
                                        label="Facebook"
                                        disabled={isLoading}
                                        variant="outline"
                                        size="small"
                                    />
                                    <Button
                                        label="LinkedIn"
                                        disabled={isLoading}
                                        variant="outline"
                                        size="small"
                                    />
                                    <Button
                                        label="Google"
                                        disabled={isLoading}
                                        variant="outline"
                                        size="small"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
