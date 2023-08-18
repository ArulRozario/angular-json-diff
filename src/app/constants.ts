export enum ViewEnum {
  LEFT = 'left',
  RIGHT = 'right',
}
export const LEFT_SUFFIX = '_' + ViewEnum.LEFT;
export const RIGHT_SUFFIX = '_' + ViewEnum.RIGHT;
export const PATH_PREFIX = '_path';

export const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcnVsIiwibmFtZSI6IkFydWwgUm96YXJpbyIsInVzZXItdHlwZSI6ImV4YW1pbmVyIiwidGVuYW50IjoiZGV2LWNhbiIsInRvb2wiOiJMQVZBX0FETUlOIiwiZXhhbWluZXItaWQiOiJjYWZlNDU2MC01NjMxLTQ2MDUtOWQxNS02ZmFiZTc5MmRkMGMiLCJpcy1zdXBlcnZpc29yIjp0cnVlLCJ0ZW5hbnQtYWRtaW4iOnRydWUsImlzLXN1cGVydXNlciI6ZmFsc2UsImlhdCI6MTY5MTc0NDY3NiwiZXhwIjoxNjkxNzUxODc2fQ.GRONFSMCimvHQch2dr7hD-c_tOU0CKrLDfJYEDXbbmBzEWcZAFj6YmcVe6EhciE62VXo8WS-76WLTSJDye68sg';
export const TENANT = 'dev-can';
export const END_POINT =
  'http://api.examinerdev.lava.landadmin.com/api/title/tamper/diff?title-id=TID1193';
