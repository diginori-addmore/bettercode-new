export async function POST(request: Request) {
  try {
    const { requestId } = await request.json()
    
    // 1. requestId 검증
    if (!requestId) {
      return Response.json(
        { error: 'requestId가 필요합니다' },
        { status: 400 }
      )
    }
    
    console.log('requestId 검증 시도:', requestId)
    
    // 2. 백엔드 API로 검증 요청 (POST!)
    const response = await fetch(
      `https://console-backend-service.bettercode.kr/api/contact-us/requests/${requestId}/verify`,
      {
        method: 'POST',  // ← POST 명시!
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    
    const responseText = await response.text()
    console.log('백엔드 검증 응답:', responseText)
    console.log('상태 코드:', response.status)
    
    if (!response.ok) {
      if (response.status === 400 || response.status === 404) {
        return Response.json(
          { valid: false, error: '만료되거나 유효하지 않은 링크입니다' },
          { status: 400 }
        )
      }
      throw new Error('검증 실패')
    }
    
    // JSON 파싱
    let data
    try {
      data = responseText ? JSON.parse(responseText) : {}
    } catch (parseError) {
      console.error('JSON 파싱 실패:', parseError)
      throw new Error('백엔드 응답 형식이 올바르지 않습니다')
    }
    
    return Response.json({ valid: true, data })
    
  } catch (error) {
    console.error('검증 에러:', error)
    return Response.json(
      { error: '검증 중 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}