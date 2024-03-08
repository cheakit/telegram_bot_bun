class TelegramCommand {
  static readonly start = "/start"
  static readonly stats = "/stats"
  static readonly checkin = "/checkin"
  static readonly checkout = "/checkout"
  static readonly askPermission = "/ask_permission"
  static readonly status = "/status"
  static readonly profile = "/profile"
  static readonly register = "/register"
  static readonly staffs = "/staffs"
  static readonly export = "/export"
  static readonly exportTasks = "/export_tasks"
  static readonly print = "/print"
  static readonly tasks = "/tasks"
  static readonly tasksNew = "/tasks_new"
  static readonly tasksDelete = "/tasks_delete"
  static readonly info = "/info"
  static readonly help = "/help"

  static getAllTelegramCommands() {
    return Object.values(TelegramCommand)
  }
}

export { TelegramCommand }
