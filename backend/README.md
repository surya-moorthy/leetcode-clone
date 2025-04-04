# Coding Platform

This is a comprehensive coding platform that provides a set of features for users to improve their coding skills, compete in challenges, and track their progress. Below is an overview of the features and functionalities of the platform.

## Features

### 1. **User Authentication & Authorization**
   - Users must authenticate and authorize their accounts before accessing coding challenges.
   - Sessions have an expiration time, and users must log in again once the session expires to continue solving problems.

   Signup - POST/  username , password , email 
   Signin - POST/ username , password
   loqout - POST/

   Auth Middleware - GET/ headers : Bearer <>

### 2. **Problem List**
   - Users can view a list of problems categorized by topic.
   - The problem list supports pagination, allowing users to navigate through multiple pages of problems.

   List Problems - GET/problems, user Auth(user middleware)
   

### 3. **Display Problem Details**
   - Clicking on a specific problem will display the detailed description and requirements for that problem.

   list a problem from the problem list - GET/problems?problemId=""
   
### 4. **Problem Submission**
   - Users can submit their solutions to problems.
   - Submitted code will be verified against the platform’s runtime environment to ensure correctness.
   
   submission of a problem - POST/ ,userId,problemId , code , lang.

   Response - SubmissionsStatus , testCasesPassed , memoryUsed
               
   

### 5. **Result and Performance Metrics**
   - After submission, the platform will display the result of the code execution, showing:
     - How many test cases passed.
     - The memory usage during the code execution.
     - The time taken for the code to run.

### 6. **Competitions**
   - Users can participate in various coding competitions.
   - Competitions are designed to help users improve their skills while competing against others for rankings and prizes.

### 7. **Leaderboard**
   - A leaderboard is provided to display the rankings of users based on their performance in coding challenges and competitions.
   - Users can track their progress and see where they stand compared to other coders.

## Getting Started

To get started with the platform, users must sign up or log in to access coding problems, submit solutions, and participate in competitions. Once logged in, users can explore problems, submit their code, and check results based on real-time execution.

