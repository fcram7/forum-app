const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  const putAccessToken = (token) => {
    localStorage.setItem('accessToken', token)
  }

  const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  }

  const fetchWithToken = async (url, options = {}) => {
    return await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  const register = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/register`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseJson = await response.json()
    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    });

    const responseJson = await response.json()

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { token } } = responseJson;

    return token;
  }

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { users } } = responseJson;

    return users;
  }

  const getOwnProfile = async () => {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { user } } = responseJson;
    return user;
  }

  const createThread = async ({ title, body, category }) => {
    const response = await fetchWithToken(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body,
        category
      })
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { thread }} = responseJson;
    return thread;
  }

  const getAllThreads = async () => {
    const response = await fetch(`${BASE_URL}/threads`)
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { threads } } = responseJson;
    return threads
  }

  const getThreadDetail = async (id) => {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message);
    }

    const { data: { detailThread } } = responseJson;

    return detailThread;
  }

  const addCommentToThread = async ({ id, content }) => {
    const response = await fetchWithToken(`${BASE_URL}/threads/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      })
    })

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { comment } } = responseJson;

    return comment;
  }

  const upVoteComment = async ({ threadId, commentId, voteType = 1 }) => {
    const response = await fetchWithToken(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: voteType
      })

    const responseJson = await response.json()
    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { vote }} = responseJson;

    return vote;
  }

  const downVoteComment = async ({ threadId, commentId, voteType = -1}) => {
    const response = await fetchWithToken(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: voteType
      })
    
    const responseJson = await response.json()

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { vote }} = responseJson;
    return vote;
  }

  const neutralVoteComment = async ({ threadId, commentId, voteType = 0 }) => {
    const response = await fetchWithToken(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: voteType
      })

    const responseJson = await response.json();

    const { status, message } = responseJson;
    if(status !== 'success') {
      throw new Error(message)
    }

    const { data: { vote } } = responseJson;
    return vote;
    
  }

  const upVoteThread = async ({ id, voteType = 1 }) => {
    const response = await fetchWithToken(`${BASE_URL}/threads/${id}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: voteType,
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;

    return vote;
  };

  const downVoteThread = async ({ id, voteType = -1}) => {
    const response = await fetchWithToken(`${BASE_URL}/threads/${id}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: voteType,
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;

    return vote;
  }

  const neutralVoteThread = async ({ id, voteType = 0}) => {
    const response = await fetchWithToken(`${BASE_URL}/threads/${id}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: voteType,
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if(status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;

    return vote;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getAllUsers,
    getOwnProfile,
    createThread,
    getAllThreads,
    getThreadDetail,
    addCommentToThread,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
    upVoteThread,
    downVoteThread,
    neutralVoteThread
  }
})();

export default api;
