
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AdditionModule", (m) => {
    const addition = m.contract("Addition");

    return { addition };
});


localhost: {
        type: "http",
        url: "http://127.0.0.1:8545"
    },


perfectnum


import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("PerfectNumberModule", (m) => {
    const perfect = m.contract("PerfectNumber");
    return { perfect };
});
