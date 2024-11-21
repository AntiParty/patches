import { type DiscordClient } from "@/lib/client"
import { Logger } from "@/lib/logger"
import { ActivityType } from "discord.js"
import { Client } from "discord-rpc"

const rpc = new Client({ transport: "ipc" });

export default async (client: DiscordClient) => {
  Logger.info(`Logged in as ${client.user?.tag}!`)

  client.user?.setActivity({
    name: "Santai.GG",
    type: ActivityType.Watching,
  })
}
