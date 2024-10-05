import type * as Common from '@strapi/types'
import type * as UID from '@strapi/types/dist/uid'
import type * as Schema from '@strapi/types/dist/schema'
// import type { Attribute, Common, Utils } from '@strapi/types'
import * as Params from '@strapi/types/dist/modules/entity-service/params'

export type GetValues<TSchemaUID extends UID.Schema> =
  Schema.Attributes<TSchemaUID> & DocumentResponse

export type TContentTypeUID = UID.ContentType

type DocumentResponse = {
  id: number
  documentID: string
}

type StrapiBaseParams = {
  meta: Record<string, unknown>
}

export interface StrapiResponseError {
  data: null
  error: {
    status: number
    name: string
    message: string
    details: Record<string, unknown>
  }
}

export interface StrapiResponse<TContentTypeUID extends UID.ContentType> {
  data: GetValues<TContentTypeUID>
}

export interface StrapiResponseList<TContentTypeUID extends UID.ContentType> {
  data: GetValues<TContentTypeUID>[]
}

export type StrapiGetParams<TContentTypeUID extends UID.ContentType> =
  Params.Pick<
    TContentTypeUID,
    'fields' | 'filters' | 'sort' | 'populate' | 'pagination'
  >

export type StrapiPostParams<TContentTypeUID extends UID.ContentType> =
  Params.Pick<TContentTypeUID, 'data' | 'files'>
