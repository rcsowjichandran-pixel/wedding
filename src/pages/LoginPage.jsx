import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

/* Dark red accent used by the Login & Continue button and the Forgot Password link */
const ACCENT_RED = '#B03A3A';

const inputClass =
  'w-full h-[42px] px-[14px] rounded-md border border-stone-300 bg-white text-[13px] text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-500';

const labelClass = 'block mb-[6px] text-[13px] text-stone-800';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { showToast } = useStore();

  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signUpForm, setSignUpForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Optional ?redirect=/checkout so a locked page can send the guest here first
  const redirectTo = searchParams.get('redirect') || '/';

  const saveUser = (user) => {
    try {
      localStorage.setItem('wedknot_user', JSON.stringify(user));
    } catch (error) {
      console.error(error);
    }
    showToast(`Welcome ${user.name}! You are logged in.`);
    navigate(redirectTo);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email.trim() || !loginForm.password) {
      showToast('Please enter your email and password.');
      return;
    }
    saveUser({
      name: loginForm.email.split('@')[0],
      email: loginForm.email.trim(),
      loggedInAt: Date.now()
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!signUpForm.name.trim() || !signUpForm.email.trim() || !signUpForm.password) {
      showToast('Please fill in your name, email and password.');
      return;
    }
    if (signUpForm.password !== signUpForm.confirmPassword) {
      showToast('Password and Confirm Password must match.');
      return;
    }
    saveUser({
      name: signUpForm.name.trim(),
      email: signUpForm.email.trim(),
      loggedInAt: Date.now()
    });
  };

  const handleForgotPassword = () => {
    if (!loginForm.email.trim()) {
      showToast('Enter your registered email to reset the password.');
      return;
    }
    showToast(`Password reset link sent to ${loginForm.email.trim()}.`);
  };

  const tabClass = (tab) =>
    `pb-[6px] text-[20px] sm:text-[24px] font-bold transition-colors ${
      activeTab === tab
        ? 'text-stone-900 border-b-2 border-stone-900'
        : 'text-stone-800 hover:text-stone-900'
    }`;

  return (
    <div className="bg-[#E6E6FA] min-h-screen font-poppins text-stone-900 pb-[48px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-[40px] sm:pt-[56px]">
        <div className="bg-white shadow-[0_2px_12px_rgba(45,45,58,0.10)] px-[24px] sm:px-[72px] py-[32px] sm:py-[44px]">
          <h1 className="sr-only">Login or Sign Up</h1>

          {/* Login / Sign Up tabs */}
          <div className="flex items-end justify-center gap-[56px] sm:gap-[96px]">
            <button type="button" onClick={() => setActiveTab('login')} className={tabClass('login')}>
              Login
            </button>
            <button type="button" onClick={() => setActiveTab('signup')} className={tabClass('signup')}>
              Sign Up
            </button>
          </div>

          <div className="mt-[28px] sm:mt-[36px] grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
            {/* Left column: the active form */}
            <div className="max-w-[340px]">
              {activeTab === 'login' ? (
                <form onSubmit={handleLogin} noValidate>
                  <h2 className="text-[17px] font-bold text-stone-900">Login to my Account</h2>

                  <div className="mt-[16px]">
                    <label htmlFor="login-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="login-email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter Email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-[14px]">
                    <label htmlFor="login-password" className={labelClass}>
                      Password
                    </label>
                    <input
                      id="login-password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter Password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-[18px] w-full h-[42px] rounded-md text-white text-[13px] font-semibold shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: ACCENT_RED }}
                  >
                    Login &amp; Continue
                  </button>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="mt-[14px] w-full text-center text-[13px] font-semibold underline-offset-2 hover:underline cursor-pointer"
                    style={{ color: ACCENT_RED }}
                  >
                    Forgot Password
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSignUp} noValidate>
                  <h2 className="text-[17px] font-bold text-stone-900">Sign Up for a new Account</h2>

                  <div className="mt-[16px]">
                    <label htmlFor="signup-name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="signup-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter Full Name"
                      value={signUpForm.name}
                      onChange={(e) => setSignUpForm((prev) => ({ ...prev, name: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-[14px]">
                    <label htmlFor="signup-email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="signup-email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter Email"
                      value={signUpForm.email}
                      onChange={(e) => setSignUpForm((prev) => ({ ...prev, email: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-[14px]">
                    <label htmlFor="signup-password" className={labelClass}>
                      Password
                    </label>
                    <input
                      id="signup-password"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Enter Password"
                      value={signUpForm.password}
                      onChange={(e) => setSignUpForm((prev) => ({ ...prev, password: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-[14px]">
                    <label htmlFor="signup-confirm" className={labelClass}>
                      Confirm Password
                    </label>
                    <input
                      id="signup-confirm"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Re-enter Password"
                      value={signUpForm.confirmPassword}
                      onChange={(e) => setSignUpForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-[18px] w-full h-[42px] rounded-md text-white text-[13px] font-semibold shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: ACCENT_RED }}
                  >
                    Sign Up &amp; Continue
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="mt-[14px] w-full text-center text-[13px] font-semibold underline-offset-2 hover:underline cursor-pointer"
                    style={{ color: ACCENT_RED }}
                  >
                    Already have an account? Login
                  </button>
                </form>
              )}
            </div>

            {/* Right half intentionally kept empty - matches the approved design */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
