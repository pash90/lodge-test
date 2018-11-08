/**
 * @typedef Log
 * @property {string} time
 * @property {string} msg
 * @property {string} app
 * @property {string} [parent_span_id]
 * @property {string} component
 * @property {string} span_id
 * @property {string} level
 * @property {string} env
 * @property {string} trace_id
 * @property {boolean} [error]
 */

const t = {
  time: "2018-10-27T19:25:10+11:00",
  msg: "login failed for cb1d6dfc-accc-404f-a999-8fbe252195fc",
  component: "auth.user.Login()",
  app: "svc-app1",
  span_id: "3167d4d8-3330-4e44-9c08-f719c49a0712",
  level: "debug",
  env: "prod",
  trace_id: "a7a23945-d89b-4858-a33c-3d084cb747b1"
};
