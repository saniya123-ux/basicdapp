
import { ethers } from "ethers";

const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
    "function addNumbers(uint256,uint256)",
    "function getResult() view returns(uint256)"
];

let contract;
const $ = id => document.getElementById(id);

// Connect Wallet
$("connectBtn").onclick = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.BrowserProvider(window.ethereum);
    contract = new ethers.Contract(address, abi, await provider.getSigner());

    $("wallet").innerText = "Wallet Connected";
};

// Add Numbers
$("addBtn").onclick = async () => {
    const tx = await contract.addNumbers(
        BigInt($("num1").value),
        BigInt($("num2").value)
    );

    await tx.wait();
    $("result").innerText = await contract.getResult();
};

// Refresh Result
//$("readBtn").onclick = async () => {
 //   $("result").innerText = await contract.getResult();
// <button id="readBtn">Refresh Result</button>};
