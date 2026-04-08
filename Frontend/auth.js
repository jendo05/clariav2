const Auth = (() => {
  const TOKEN_KEY = 'claria_token';
  const USER_KEY  = 'claria_user';
  const getToken  = () => localStorage.getItem(TOKEN_KEY);
  const getUser   = () => { try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch { return null; } };
  const isLoggedIn= () => !!getToken();
  const logout    = () => { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); location.href = 'login.html'; };
  const requireAuth = () => { if (!isLoggedIn()) location.href = 'login.html'; };

  const apiFetch = async (url, options = {}) => {
    const token = getToken();
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
    });
    if (res.status === 401) { logout(); return null; }
    return res;
  };

  return { getToken, getUser, isLoggedIn, logout, requireAuth, apiFetch };
})();
