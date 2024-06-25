import { NextRequest, NextResponse } from 'next/server'
import { getCharactersQry, useCaseService } from '../../../core/service-locator/service-locator'
import { CharactersApiQry } from '../../../core/http/characters-api-qry'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const nameStartsWith = searchParams.get('nameStartsWith')

  const params: CharactersApiQry = {
    limit: 50,
    ...(nameStartsWith && { nameStartsWith }),
  }
  const response = await useCaseService.execute(getCharactersQry, params)

  return NextResponse.json(response)
}
