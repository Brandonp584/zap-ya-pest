// IMPORT OF PESTS
import { Pest } from "./types";
import { ants } from "./ants";
import { bedBugs } from "./bed-bugs";
import { bees } from "./bees";
import { cockroaches } from "./cockroaches";
import { fleas } from "./fleas";
import { mice } from "./mice";
import { mosquitoes } from "./mosquitoes";
import { rats } from "./rats";
import { silverfish } from "./silverfish";
import { spiders } from "./spiders";
import { termites } from "./termites";
import { wasps } from "./wasps";



// Combine all pest objects into one array
export const pests: Pest[] = [
    ants,
    bedBugs,
    bees,
    cockroaches,
    fleas,
    mice,
    mosquitoes,
    rats,
    silverfish,
    spiders,
    termites,
    wasps,    
];

export type { Pest };