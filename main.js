
import { ethers } from "ethers";

const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
    "function addNumbers(uint256,uint256)",
    "function getResult() view returns(uint256)",
    "function checkPerfect(uint256) view returns(bool)"
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


// Check Prime Number
$("checkBtn").onclick = async () => {
    const result = await contract.checkPrime($("number").value);

    $("result").innerText = result ? "Prime Number" : "Not a Prime Number";
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


// Check Perfect Number
$("checkBtn").onclick = async () => {
    const result = await contract.checkPerfect($("number").value);

    $("result").innerText = result ? "Perfect Number" : "Not a Perfect Number";
};
