# Challenge 1 Final Project

## Description

*[*[
comp Bot will help you learn computer basics and symbols definitions about computers elements . You can chat, ask questions and learn more .when a user need a definition for any symbol related with computer such as : CPU ;  the compbot answer the user with the right meaning and ready to next one .
That helps the student to follow up the teacher in class if he\she say a symbol that’s he didn’t recognized in the same time or he could ask compbot about it later ( outside class room ).]*
*

## Questions

### How did you build it (platform and technology)?

*[C++ , Photo shop ]*

### What challenges did you face?

*[still some issues with gitlab , some of team member not available to live seminar   ]*

### What aspect of the chatbot do you like best? 

*[helping side ]*

### What would you different in the future? 

*[help the user by give the short links about computer basics information , such as : Microsoft word ….ect   ]*

### Are there any parts of your code you'd like to highlight?

*[Your answer here...]*
The
#pragma warning(disable: 4786)

#include <iostream>
#include <string>
#include <vector>
#include <ctime>

const int MAX_RESP = 2;

typedef std::vector<std::string> vstring;

vstring find_match(std::string input);
void copy(char *array[], vstring &v);


typedef struct {
    char *input;
    char *responses[MAX_RESP];
}record;

record KnowledgeBase[] = {
    {"What is pc
", 
    {" pc is personal computer (PC).",
     }
    },

    {"What is the(CD) 
", 
    {"CD is compact disc (CD)",
     }
    },
    
    {" What is the CPU",
    {"CPU is Central Processing Unit",
   }
    },

    {"What is HTML?
",
    {"HTML is HyperText Markup Language.",
     }
    },

    {"What is the(www)",
    {"www is World Wide Web
.",
    }
    },

    {"What is the RAM",
    {"RAM is
Random Access Memory ",
     "WHAT is the NIC?",
     "NIC is 
Network Information Center ."}
    }
};

size_t nKnowledgeBaseSize = sizeof(KnowledgeBase)/sizeof(KnowledgeBase[0]);


int main() {
    srand((unsigned) time(NULL));

    std::string sInput = "";
    std::string sResponse = "";

    while(1) {
        std::cout << ">";
        std::getline(std::cin, sInput);
        vstring responses = find_match(sInput);
        if(sInput == "BYE") {
            std::cout << "IT WAS NICE TALKING TO YOU USER, SEE YOU NEXTTIME!" << std::endl;  
            break;
        } 
        else if(responses.size() == 0)  {
            std::cout << "I'M NOT SURE IF I  UNDERSTAND WHAT YOU  ARE TALKING ABOUT." << std::endl;
        }
        else {
            int nSelection = rand()  % MAX_RESP;
            sResponse =   responses[nSelection]; std::cout << sResponse << std::endl; 
        } 
    } 

    return 0;
}
    
// make a  search for the  user's input 
// inside the database of the program 
vstring find_match(std::string  input) { 
    vstring result;
    for(int i = 0; i < nKnowledgeBaseSize;  ++i) {  
        if(std::string(KnowledgeBase[i].input) == input) { 
            copy(KnowledgeBase[i].responses, result); 
            return result;
        } 
    } 
    return result; 
}

void copy(char  *array[], vstring &v) { 
    for(int i = 0;  i < MAX_RESP; ++i) {
        v.push_back(array[i]);
    }
}
 code :

#pragma warning(disable: 4786)

#include <iostream>
#include <string>
#include <vector>
#include <ctime>

const int MAX_RESP = 2;

typedef std::vector<std::string> vstring;

vstring find_match(std::string input);
void copy(char *array[], vstring &v);


typedef struct {
    char *input;
    char *responses[MAX_RESP];
}record;

record KnowledgeBase[] = {
    {"What is pc
", 
    {" pc is personal computer (PC).",
     }
    },

    {"What is the(CD) 
", 
    {"CD is compact disc (CD)",
     }
    },
    
    {" What is the CPU",
    {"CPU is Central Processing Unit",
   }
    },

    {"What is HTML?
",
    {"HTML is HyperText Markup Language.",
     }
    },

    {"What is the(www)",
    {"www is World Wide Web
.",
    }
    },

    {"What is the RAM",
    {"RAM is
Random Access Memory ",
     "WHAT is the NIC?",
     "NIC is 
Network Information Center ."}
    }
};

size_t nKnowledgeBaseSize = sizeof(KnowledgeBase)/sizeof(KnowledgeBase[0]);


int main() {
    srand((unsigned) time(NULL));

    std::string sInput = "";
    std::string sResponse = "";

    while(1) {
        std::cout << ">";
        std::getline(std::cin, sInput);
        vstring responses = find_match(sInput);
        if(sInput == "BYE") {
            std::cout << "IT WAS NICE TALKING TO YOU USER, SEE YOU NEXTTIME!" << std::endl;  
            break;
        } 
        else if(responses.size() == 0)  {
            std::cout << "I'M NOT SURE IF I  UNDERSTAND WHAT YOU  ARE TALKING ABOUT." << std::endl;
        }
        else {
            int nSelection = rand()  % MAX_RESP;
            sResponse =   responses[nSelection]; std::cout << sResponse << std::endl; 
        } 
    } 

    return 0;
}
    
// make a  search for the  user's input 
// inside the database of the program 
vstring find_match(std::string  input) { 
    vstring result;
    for(int i = 0; i < nKnowledgeBaseSize;  ++i) {  
        if(std::string(KnowledgeBase[i].input) == input) { 
            copy(KnowledgeBase[i].responses, result); 
            return result;
        } 
    } 
    return result; 
}

void copy(char  *array[], vstring &v) { 
    for(int i = 0;  i < MAX_RESP; ++i) {
        v.push_back(array[i]);
    }
}
