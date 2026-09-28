'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function LoginForm() {
  const t = useTranslations('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!username.trim()) {
      newErrors.username = t('userRequired');
    }

    if (!password.trim()) {
      newErrors.password = t('passwordRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setUsername('');
        setPassword('');
      }, 3000);
    }
  };

  return (
    <>
      <style jsx>{`
        .login-page {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(
            180deg,
            var(--navy-950),
            var(--navy-900)
          );
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow: hidden;
        }

        .login-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1200px 600px at 78% -8%, rgba(53, 198, 232, 0.12), transparent 60%),
            radial-gradient(900px 500px at 6% 108%, rgba(21, 128, 245, 0.1), transparent 55%);
          pointer-events: none;
        }

        .login-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          margin-bottom: 48px;
          text-align: center;
        }

        .logo-wrapper {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .login-header h1 {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 0;
          color: #fff;
        }

        .login-header .subtitle {
          font-size: 14.5px;
          color: #a9bccc;
          line-height: 1.6;
          max-width: 320px;
          margin: 0;
        }

        .login-form {
          width: 100%;
          background: rgba(14, 20, 32, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid var(--line-dark);
          border-radius: 18px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13.5px;
          font-weight: 600;
          color: #cdd8e2;
          display: block;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .form-group input {
          width: 100%;
          font-family: var(--font-body);
          font-size: 15px;
          color: #fff;
          background: var(--navy-850);
          border: 1px solid var(--line-dark);
          border-radius: 11px;
          padding: 12px 14px;
          transition: all 0.15s ease;
          box-sizing: border-box;
        }

        .form-group input::placeholder {
          color: #7f93a6;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--data);
          box-shadow: 0 0 0 3px rgba(53, 198, 232, 0.15);
          background: var(--navy-800);
        }

        .form-group input.error {
          border-color: var(--err);
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        .toggle-password {
          position: absolute;
          right: 12px;
          background: transparent;
          border: none;
          color: #7f93a6;
          cursor: pointer;
          padding: 6px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.15s ease;
          font-size: 16px;
        }

        .toggle-password:hover {
          color: #cdd8e2;
        }

        .error-message {
          font-size: 12.5px;
          color: #f87171;
          margin-top: 4px;
        }

        .form-actions {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 8px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px 22px;
          background: var(--signal);
          color: #fff;
          border: none;
          border-radius: 11px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.18s ease;
          box-shadow: 0 10px 26px rgba(21, 128, 245, 0.32);
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--signal-deep);
          box-shadow: 0 14px 34px rgba(21, 128, 245, 0.45);
          transform: translateY(-2px);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(1px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .forgot-password {
          text-align: center;
        }

        .forgot-password a {
          font-size: 13.5px;
          color: var(--data);
          text-decoration: none;
          transition: color 0.15s ease;
          font-weight: 500;
        }

        .forgot-password a:hover {
          color: var(--data-soft);
          text-decoration: underline;
        }

        .divider {
          height: 1px;
          background: var(--line-dark);
          margin: 4px 0;
        }

        .support-section {
          text-align: center;
          border-top: 1px solid var(--line-dark);
          padding-top: 20px;
          margin-top: 20px;
        }

        .support-text {
          font-size: 13px;
          color: #8fa4b6;
          margin-bottom: 10px;
        }

        .support-link {
          font-size: 13.5px;
          color: var(--data);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s ease;
        }

        .support-link:hover {
          color: var(--data-soft);
        }

        .success-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(6, 15, 26, 0.95);
          backdrop-filter: blur(14px);
          border: 1px solid var(--line-dark);
          border-radius: 16px;
          padding: 32px 28px;
          text-align: center;
          z-index: 100;
          max-width: 320px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .success-message h3 {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
        }

        .success-message p {
          font-size: 14px;
          color: #a9bccc;
          margin: 0;
        }

        .success-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 16px;
          background: rgba(53, 198, 232, 0.15);
          border: 1px solid var(--data);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--data);
          font-size: 24px;
        }

        @media (max-width: 560px) {
          .login-page {
            padding: 16px;
          }

          .login-container {
            max-width: 100%;
          }

          .login-header {
            gap: 16px;
            margin-bottom: 36px;
          }

          .login-header h1 {
            font-size: 26px;
          }

          .login-form {
            padding: 24px 20px;
            gap: 16px;
          }

          .logo-wrapper {
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 380px) {
          .login-header {
            gap: 12px;
            margin-bottom: 28px;
          }

          .login-header h1 {
            font-size: 22px;
          }

          .login-form {
            padding: 20px 16px;
          }
        }
      `}</style>

      <main className="login-page">
        <div className="login-container">
          {/* Header */}
          <div className="login-header">
            <div className="logo-wrapper">
              <Image
                src="/logo-mark.png"
                alt="IRON GPS"
                width={56}
                height={56}
                priority
              />
            </div>
            <div>
              <h1>{t('title')}</h1>
              <p className="subtitle">{t('subtitle')}</p>
            </div>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">{t('username')}</label>
              <input
                id="username"
                type="text"
                placeholder={t('usernamePlaceholder')}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errors.username) {
                    setErrors({ ...errors, username: undefined });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const form = e.currentTarget.form;
                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
                  }
                }}
                className={errors.username ? 'error' : ''}
                autoComplete="username"
              />
              {errors.username && (
                <div className="error-message">{errors.username}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">{t('password')}</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('passwordPlaceholder')}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      setErrors({ ...errors, password: undefined });
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const form = e.currentTarget.form;
                      if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
                    }
                  }}
                  className={errors.password ? 'error' : ''}
                  autoComplete="current-password"
                  style={{ paddingRight: '42px' }}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '👁' : '👁‍🗨'}
                </button>
              </div>
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            {/* Submit and Actions */}
            <div className="form-actions">
              <button
                type="submit"
                className="submit-btn"
                disabled={submitted}
              >
                {submitted ? `${t('submit')}...` : t('submit')}
              </button>

              <div className="forgot-password">
                <a href="#forgot" onClick={(e) => e.preventDefault()}>
                  {t('forgotPassword')}
                </a>
              </div>

              <div className="divider" />

              <div className="support-section">
                <div className="support-text">{t('support')}</div>
                <a href="mailto:comercial1@iron-gps.com" className="support-link">
                  {t('contactSupport')}
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>{t('title')}</h3>
            <p>{t('comingSoon')}</p>
          </div>
        )}
      </main>
    </>
  );
}
