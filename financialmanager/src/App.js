import ProgressBar from './progressBar';
import Modal from './Modal';
import './App.css';
import React, { useState, useEffect } from 'react';
import QuizBox from './QuizBox';

window.onload=function(){
  var mb = document.getElementById("return");
  mb.addEventListener("click", function() {
    window.location.href = "overview.html"
  });
}

function App() {
  // State variable to keep track of the number of correct answers
  const [counter, setCounter] = useState(0);

  // function to increment the counter
  const handleCorrectAnswer = () => {
    setCounter(counter + 1);
    console.log('counter: ', counter);
  };

  // Define state variables for the modal and selected answer
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // define the modal content that will be displayed no matter what
  const modalContent = 'This is the correct answer: ...';

  const handleAnswer11 = (answer) => {
    setSelectedAnswer(answer);
    setIsOpen(true);
  };


  const modal11 = (title, option1, option2, option3, option4) =>
    showModal ? (
      <div className="grid grid-cols-2 gap-2">
        <h1>{title}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(1)}
        >
          {option1}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(2)}
        >
          {option2}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(3)}
        >
          {option3}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswer11(4)}
        >
          {option4}
        </button>
      </div>
    ) : null;

  useEffect(() => {
    const hideModal = () => {
      setShowModal(false);
    };
    document.addEventListener('click', hideModal);
    return () => {
      document.removeEventListener('click', hideModal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Quiz Area */}
      <div className="container mx-auto mt-4 px-4 flex space-x-6">
        {/* Main Content */}
        <ProgressBar counter={counter} />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Treenance</h1>
          <div className="grid grid-cols-3 gap-2">
            <QuizBox
              question="Why is budgeting considered the first step in managing personal finances?"
              options={['A. Budgeting is the process of planning how to spend money, which helps identify areas to reduce spending and increase savings.', 
              'B. Budgeting is a way to track how much money is spent on entertainment.',
              'C. Budgeting is only necessary for people with high incomes.',
              'D. Budgeting is a tool for calculating annual taxes.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is A. Budgeting is the process of planning how to spend money, which helps identify areas to reduce spending and increase savings. \n\n\nIt provides a clear picture of your financial situation, enabling you to make informed decisions about saving and spending. While saving is the ultimate goal, budgeting is the tool that helps you reach that goal.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={
              `Why?
              Budgeting is the process of creating a plan to spend your money. This spending plan, or budget, is a detailed plan that shows how much money you expect to earn or receive (your income) and how you will distribute it among various expenses.
              Once you have a budget, you can see where your money is going, which can help you identify areas where you can reduce spending. The money you save from reducing spending can then be put into savings.
              So, while saving is the goal, budgeting is the tool that helps you understand your financial situation and make informed decisions about how to reach that goal. Therefore, budgeting usually comes before saving. However, the two go hand in hand and are both important parts of sound financial management.
              Why is budgeting considered the first step in managing personal finances?
              `}
            />

            <QuizBox
              question="What is the correct way to calculate net income?"
              options={['A. Net income is calculated by subtracting total expenses from total income.',
              'B. Net income is calculated by adding total expenses to total income.',
              'C. Net income is the total income before any deductions.',
              'D. Net income is the total of all taxes paid.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is A. Net income is calculated by subtracting total expenses (including taxes and deductions for employer-provided programs) from total income. This is the amount you actually take home and have available for spending and saving.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.1 Calculate Income
              The cornerstone of a successful budget is your net income. This is the amount you actually bring home after deductions for taxes and employer-sponsored programs like retirement plans and health insurance have been made from your total wages or salary. Concentrating on your gross salary instead of your net income can result
              in overspending, as it may give the illusion of having more disposable income than you actually do. If you’re self-employed, a contractor, a gig worker, or a freelancer, it’s crucial to meticulously record your contracts and payments to effectively manage an irregular income stream.
              What is the correct way to calculate net income?
              `}
            />

            <QuizBox
              question="What is the correct sequence of steps to manage your personal finances effectively?"
              options={['A. Start tracking your daily spending, calculate your net income, and then list your fixed and variable expenses.',
              'B. Calculate your net income, start tracking your daily spending, and then list your fixed and variable expenses.',
              'C. List your fixed and variable expenses, calculate your net income, and then start tracking your daily spending',
              'D. Calculate your net income, list your fixed and variable expenses, and then start tracking your daily spending.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is D. Calculate your net income, list your fixed and variable expenses, and then start tracking your daily spending. This sequence allows you to understand your income first, then understand your regular expenses, and finally track your daily spending to identify areas for potential savings.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.2 Track Spending
              Once you’ve determined your net income, the subsequent step is to ascertain where it’s being spent. By monitoring and classifying your expenditures, you can identify where your money is primarily being spent and where potential savings could be made.
              Start by enumerating your fixed expenses, which are your regular monthly bills such as rent or mortgage, utilities, and car payments. Following that, list your variable expenses—those that fluctuate from month to month, such as groceries, fuel, and leisure activities. This is an area where you might discover opportunities to reduce spending. Credit card and bank statements are a useful resource as they often itemize or categorize your monthly expenses.
              Document your daily spending using whatever is convenient—a pen and paper, a mobile app, your smartphone, or online budgeting spreadsheets or templates.
              gathered, establish a list of your short-term and long-term financial objectives. Short-term objectives, which could include establishing an emergency fund or reducing credit card debt, should be achievable within one to three years. Long-term objectives, such as saving for retirement or funding your child’s education, may require decades to fulfill. Keep in mind that your goals are not rigid and can be adjusted as needed, but having them can provide motivation to adhere to your budget. For instance, knowing that you’re saving for a vacation might make it easier to curb spending.
              `}
            />

            <QuizBox
              question="Why is setting realistic financial goals important when managing your personal finances?"
              options={['A. Setting goals can help motivate you to stick to your budget.',
              'B. Goals are necessary for obtaining loans',
              'C. Setting goals can help you earn more money.',
              'D. Goals are required by law for financial management.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is A. Setting goals can help motivate you to stick to your budget. Having a clear objective, such as saving for a vacation, can make it easier to curb spending and adhere to your budget. Short-term and long-term financial goals provide direction and motivation in financial management.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.3 Set Goals 
              Before you begin analyzing the financial data you’ve 
              gathered, establish a list of your short-term and long-term financial objectives. Short-term objectives, which could include establishing an emergency fund or reducing credit card debt, should be achievable within one to three years. Long-term objectives, such as saving for retirement or funding your child’s education, may require decades to fulfill. Keep in mind that your goals are not rigid and can be adjusted as needed, but having them can provide motivation to adhere to your budget. For instance, knowing that you’re saving for a vacation might make it easier to curb spending.
              `}
            />

            <QuizBox
              question="What is an important step when consolidating your actual expenditure versus your desired expenditure?"
              options={['A. Ignoring your fixed costs and focusing only on variable costs.',
              'B. Setting specific and achievable budget limits for each expense category.',
              'C. Considering all expenses as necessities',
              'D. Not comparing your future spending estimates with your net income and priorities.']}
              handleAnswer={handleAnswer11}
              answerMessage={'Correct Answer: B. Setting specific and achievable budget limits for each expense category. This is crucial when exploring ways to reallocate funds towards your financial objectives. It’s also important to distinguish between necessities and luxuries in your expenses'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.4 Create plan 
              This is the stage where you consolidate everything: your actual expenditure versus your desired expenditure. Utilize the variable and fixed costs you’ve gathered to estimate your future spending. Then, juxtapose this with your net income and priorities. You might want to think about setting specific—and achievable—budget limits for each expense category.
              You may decide to further categorize your expenses into necessities and luxuries. For example, if you commute to work daily, gasoline is a necessity. On the other hand, a monthly music subscription could be considered a luxury. Recognizing this distinction is crucial when you’re exploring ways to reallocate funds towards your financial objectives.
              `}
            />

            <QuizBox
              question="What strategies can be used for sticking to a plan?"
              options={['A. Ignoring the plan and making decisions spontaneously.',
              'B. Regularly reviewing and adjusting the plan as necessary.',
              'C. Sticking rigidly to the plan, regardless of changes in circumstances.',
              'D. Not having a plan at all.']}
              handleAnswer={handleAnswer11}
              answerMessage={'Correct Answer: B. Regularly reviewing and adjusting the plan as necessary. This strategy allows for flexibility and adaptability, which are crucial for sticking to a plan in the face of changing circumstances'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.5 Stick to plan
              Revise your expenditure to maintain your budget. Now that you’ve tracked your earnings and expenses, you can tweak as needed to prevent overspending and allocate funds towards your objectives. Consider your “desires” as the initial area for reductions. Could you forgo a night out at the cinema in favor of a home movie? If you’ve already curtailed your discretionary spending, scrutinize your monthly bills. Upon closer examination, a “necessity” might just be a “luxury.”
              If the figures still don’t tally, consider modifying your fixed costs. For example, could you save more by comparing prices for a better deal on car or home insurance? These decisions carry significant implications, so ensure you consider your choices carefully.
              Keep in mind, even minor savings can accumulate to a substantial amount over time. You may be astonished at how much additional money you gather by implementing one small change at a time.
              `}
            />

            <QuizBox
              question="What is the key advice for managing a budget together?"
              options={['A. You should keep your finances completely separate and manage your own money.', 
              'B. If you’re single, you don’t need to worry about budgeting.', 
              'C. If you’re married, you should have a monthly budgeting night and set financial goals together. ', 
              'D. You should manage your money independently, even if you’re married.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is C. If you’re married, you should have a monthly budgeting night and set financial goals together. This approach helps ensure both partners are on the same page with their financial situation and goals. It’s also recommended to make the process enjoyable by adding elements like favorite snacks or a good playlist. Remember, it’s not “your money” or “my money”—it’s “our money”.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={
              `
              1.6 Do the budget together.
              Budgeting is a team effort. You need someone who can hold you accountable financially! If you’re single, find a cheerleader who will help you stay on track with your goals! Schedule a monthly budget review to reflect on the past month and plan for the upcoming one.

              For those who are married, make a habit of having a monthly family budgeting session. Make it enjoyable! Have some of your favorite treats on hand and play some good music.

              It’s important to align your financial goals, so take the time to set these goals together and envision what your future will look like. Keep in mind: If you’re a couple, your bank accounts should be unified! It’s not about ‘your money’ or ‘my money’—it’s about ‘our money’."}
              `}
              />

            <QuizBox
              question="Why is having a safety net in your budget crucial?"
              options={['A) It provides a cushion of savings, insurance, and other assets that you can fall back on in case of an emergency.',
              'B) It helps you avoid debt by covering unexpected costs without relying on credit cards or loans.', 
              'C) It gives you peace of mind knowing that you’re prepared for whatever life throws your way.', 
              'D) All of the above.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is D) All of the above. A financial safety net is crucial for emergency preparedness, avoiding debt, providing peace of mind, ensuring financial security, and maintaining a recommended savings amount. The sooner you start saving and prioritize building up your financial safety net, the easier your financial life will be in the event of an emergency.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.7
               Having a safety net in your budget is crucial for several reasons:

              1. **Emergency Preparedness**: A financial safety net is a cushion of savings, insurance, and other assets that you can fall back on in case of an emergency¹. This could be an unexpected medical bill, a sudden home repair, or a family emergency¹.

              2. **Avoiding Debt**: A financial safety net can help you cover these costs without going into debt¹. Without a healthy reserve of savings, you may be forced to rely on credit cards or loans to pay for an unforeseen emergency, which can be difficult, expensive, and time-consuming to pay off¹.

              3. **Peace of Mind**: Having a financial safety net can give you peace of mind knowing that you're prepared for whatever life throws your way¹. It can help reduce the stress and anxiety that comes with financial emergencies¹.

              4. **Financial Security**: A financial safety net is meant to protect you and your family, at least in part, from losing your financial security or derailing your long-term financial goals².

              5. **Savings Amount**: Most experts recommend keeping enough money in your financial safety net to cover at least 3-6 months' worth of living expenses¹². This kind of savings is often referred to as an "Emergency Fund" or "Rainy Day Fund," and it is the most basic form of a financial safety net¹.

              Remember, the sooner you start saving and prioritize building up your financial safety net, the easier your financial life will be in the event of an emergency¹.
              `}
            />

            <QuizBox
              question=" Why is it crucial to prioritize debt settlement when budgeting?"
              options={['A. It allows for income maximization by freeing up your income from past debts.', 
              'B. It enables the use of the Debt Snowball Method for quicker debt reduction.', 
              'C. It helps avoid additional debt by maintaining an emergency fund.', 
              'D. All of the above.']}
              handleAnswer={handleAnswer11}
              answerMessage={'The correct answer is D) All of the above. Prioritizing debt settlement when budgeting is crucial for income maximization, enabling effective debt reduction strategies like the Debt Snowball Method, avoiding additional debt by keeping an emergency fund intact, and more. Remember, the sooner you start saving and prioritize building up your financial safety net, the easier your financial life will be in the event of an emergency.'}
              handleCorrectAnswer={handleCorrectAnswer}
              correctAnswerIndex={1}
              educationalContent={`
              1.7
              Prioritizing debt settlement when budgeting is crucial for several reasons:

              1. Income Maximization: Your income is your greatest wealth-building tool. However, debt is about paying off the past—allocating this month's income to something you bought last month, last year, or even longer ago¹. Debt holds your income and future hostage¹.
              
              2. Debt Snowball Method: This method involves listing your debts from smallest balance to largest, ignoring the interest rates initially¹. You attack the smallest debt first, putting any extra money you can get toward that debt while continuing to pay the minimum on the rest of your debts¹. Once you've paid off the smallest debt, start on the second smallest¹. This method provides quick wins early, motivating you to keep going until you're totally debt-free¹.
              
              3. Avoiding Additional Debt: It's crucial to keep an emergency fund intact while eliminating debt so you don't go into additional debt if unexpected expenses arise².
              
              4. Budgeting for Debt Repayment: Budgeting gives you a clear understanding of where your money goes each month, which can help you identify spending patterns and areas where you can cut back². It helps you pinpoint how much of your income you can safely devote to debt repayment².
              
              5. Automatic Debt Payoff: A budget allows you to calculate how much extra you can put toward your debt each month and then set up automatic transfers or autopay, letting you pay off debt using a "set it and forget it" approach².
              
              Remember, the sooner you start saving and prioritize building up your financial safety net, the easier your financial life will be in the event of an emergency¹.
              
              Source: Conversation with Bing, 2/18/2024
              (1) How to Tackle Debt - Ramsey - Ramsey Solutions. https://www.ramseysolutions.com/budgeting/guide-to-budgeting/how-to-tackle-debt.
              (2) How to Pay Off More Debt Using a Budget - Experian. https://www.experian.com/blogs/ask-experian/how-to-pay-off-more-debt-using-budget/.
              (3) 5 Step Plan to Debt Reduction and Better Budgeting. https://nomoredebts.org/blog/dealing-with-debt/debt-reduction-plan-better-budgeting.
              (4) What is a Budget? What Are the Benefits of Budgeting? - Debt.com. https://www.debt.com/budgeting/.
              (5) Why Is Budgeting Important? 10 Key Benefits - Be The Budget. https://bethebudget.com/why-is-budgeting-important/.`}
            />
          </div>
        </div>
      </div>

        <button id = "return" >
              Return
        </button>

    </div>
  );
}

export default App;

