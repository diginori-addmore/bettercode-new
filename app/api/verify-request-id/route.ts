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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    
    console.log('백엔드 검증 상태 코드:', response.status)
    
    // 3. 응답 확인
    if (response.ok) {  // 200-299 모두 성공!
      console.log('검증 성공')
      return Response.json({ valid: true })
    }
    
    // 4xx, 5xx 에러 (만료되거나 잘못된 링크)
    console.error('검증 실패:', response.status)
    return Response.json(
      { valid: false, error: '만료되거나 유효하지 않은 링크입니다' },
      { status: 400 }
    )
    
  } catch (error) {
    console.error('검증 에러:', error)
    return Response.json(
      { error: '검증 중 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}