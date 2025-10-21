export async function POST(request: Request) {
  try {
    const { requestId, name, phone, subject, message } = await request.json()
    
    // 1. 필수 필드 검증
    if (!requestId) {
      return Response.json(
        { error: 'requestId가 필요합니다' },
        { status: 400 }
      )
    }
    
    if (!name || !phone || !subject || !message) {
      return Response.json(
        { error: '모든 필드를 입력해주세요' },
        { status: 400 }
      )
    }
    
    console.log('문의 제출 시도:', { requestId, name, phone })
    
    // 2. 백엔드 API 호출
    const response = await fetch('https://console-backend-service.bettercode.kr/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requestId: requestId,
        name: name,
        phone: phone,
        subject: subject,
        message: message
      })
    })
    
    // 3. 응답 확인
    const responseText = await response.text()
    console.log('백엔드 응답 (raw):', responseText)
    console.log('상태 코드:', response.status)
    
    if (!response.ok) {
      console.error('백엔드 API 에러:', response.status, responseText)
      
      // 만료된 requestId인 경우 (30분 초과)
      if (response.status === 400 || response.status === 404) {
        return Response.json(
          { error: '유효하지 않거나 만료된 링크입니다. (30분 경과)' },
          { status: 400 }
        )
      }
      
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
    
    return Response.json({ 
      success: true,
      message: '문의가 성공적으로 접수되었습니다!',
      data
    })
    
  } catch (error) {
    console.error('문의 제출 에러:', error)
    return Response.json(
      { 
        error: '서버 오류가 발생했습니다',
        detail: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    )
  }
}