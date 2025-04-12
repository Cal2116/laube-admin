import { DiscordSnowflake } from '@sapphire/snowflake'

class Snowflake {
  static generate() {
    return DiscordSnowflake.generate().toString()
  }
}

export default Snowflake
