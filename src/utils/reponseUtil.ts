// const successResponse = (res: Response, message: string, data: any) => {
//   const customResponse = {
//     status: "success",
//     message,
//     data,
//     timestamp: new Date().toISOString(),
//   }
//   res.json({
//     code: ctx.set.status ?? 200,
//     data: response,
//     status: true,
//     message: 'OK'
//   })
// }

// const errorResponse = (res: Response, message: string) => {
//   const customResponse = {
//     status: "fail",
//     message,
//     timestamp: new Date().toISOString(),
//   }
//   res.status(500).json(customResponse)
// }

// export { successResponse, errorResponse }
