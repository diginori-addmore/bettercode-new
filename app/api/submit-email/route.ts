export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    // 1. 이메일 검증
    if (!email || !email.includes('@')) {
      return Response.json(
        { error: '올바른 이메일을 입력해주세요' },
        { status: 400 }
      )
    }
    
    console.log('이메일 제출 시도:', email)
    
    // 2. 백엔드 API 호출
    const response = await fetch('https://console-backend-service.bettercode.kr/api/contact-us/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    
     // 3. 응답 확인
    console.log('백엔드 상태 코드:', response.status)
    
    if (response.ok) {  // 200-299 모두 성공!
      return Response.json({ 
        success: true,
        message: '이메일이 전송되었습니다. 메일함을 확인해주세요.'
      })
    }
    
    // 에러
    console.error('백엔드 API 에러:', response.status)
    return Response.json(
      { error: '이메일 전송에 실패했습니다' },
      { status: 400 }
    )
    
  } catch (error) {
    console.error('이메일 제출 에러:', error)
    return Response.json(
      { 
        error: '서버 오류가 발생했습니다',
        detail: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    )
  }
}