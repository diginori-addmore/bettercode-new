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
    const responseText = await response.text()
    console.log('백엔드 응답 (raw):', responseText)
    console.log('상태 코드:', response.status)
    
    if (!response.ok) {
      console.error('백엔드 API 에러:', response.status, responseText)
      throw new Error(`API 호출 실패: ${response.status}`)
    }
    
    // JSON 파싱 시도
    let data
    try {
      data = responseText ? JSON.parse(responseText) : {}
      console.log('백엔드 응답 (parsed):', data)
    } catch (parseError) {
      console.error('JSON 파싱 실패:', parseError)
      console.error('응답 내용:', responseText)
      throw new Error('백엔드 응답 형식이 올바르지 않습니다')
    }
    
    // 4. requestId 확인 (있을 수도, 없을 수도)
    if (data.requestId) {
      return Response.json({ 
        success: true, 
        requestId: data.requestId,
        message: '이메일이 전송되었습니다. 30분 내에 확인해주세요.'
      })
    }
    
    return Response.json({ 
      success: true,
      message: '이메일이 전송되었습니다. 메일함을 확인해주세요.'
    })
    
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