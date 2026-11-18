import { aiLogChannels } from "@aicore8/lib/server";

// The hot dog stand logs its sales on `hotdog` (server/hotdog/).
aiLogChannels({ work: { active: false }, hotdog: { active: false } });
