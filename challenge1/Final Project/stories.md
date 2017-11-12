## get activity path            
  - action_greet
  - action_give_daily_activity
* _thanks            
  - action_welcome

## get feedback P path             
  - action_greet
  - action_ask_feedback          
* _affirm
  - action_happy
  - action_bye

## get feedback N1 path             
  - action_greet
  - action_ask_feedback          
* _deny
  - action_unhappy
  - action_want_clarification
* _affirm
  - action_explain_detail
  - action_bye

## get feedback N2 path             
  - action_greet
  - action_ask_feedback          
* _deny
  - action_unhappy
  - action_want_clarification
* _deny
  - action_sorry
  - action_bye

## get clarification path
* _greet
  - action_greet
* _unclear
  - action_explain_detail
* _thanks
  - action_welcome
  - action_bye

## get more activities path
* _greet
  - action_greet
* _more_acitivities
  - action_give_more_activities
* _thanks
  - action_welcome
  - action_bye