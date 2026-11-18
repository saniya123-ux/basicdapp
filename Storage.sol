
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Addition {

    uint256 public result;

    // Function to add two numbers
    function addNumbers(uint256 a, uint256 b) public {
        result = a + b;
    }

    // Function to get the result
    function getResult() public view returns (uint256) {
        return result;
    }
}


perfectnum


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract PerfectNumber {

    function checkPerfect(uint256 n) public pure returns (bool) {
        if (n <= 1) return false;

        uint256 sum = 0;

        for (uint256 i = 1; i <= n / 2; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }

        return sum == n;
    }
}

primeno


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract PrimeNumber {

    function checkPrime(uint256 n) public pure returns (bool) {
        if (n <= 1) return false;

        for (uint256 i = 2; i <= n / i; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
}
