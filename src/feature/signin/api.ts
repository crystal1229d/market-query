export async function login({ username, password }: { username: string; password: string }) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include'
  })

  if (!res.ok) throw new Error('로그인 실패')

  const data = await res.json()
  return data
}
