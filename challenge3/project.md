# Challenge 3 Final Project

## Description

*[ Video https://gitlab.refugeelearning.site/rla/Virtual-Teacher/team-template/blob/master/challenge3/Prototype%20Test1.mp4 
.  Pictures https://gitlab.refugeelearning.site/rla/Virtual-Teacher/team-template/blob/master/photos/1.jpg . https://gitlab.refugeelearning.site/rla/Virtual-Teacher/team-template/blob/master/photos/2.png . https://gitlab.refugeelearning.site/rla/Virtual-Teacher/team-template/blob/master/photos/3.jpg . https://gitlab.refugeelearning.site/rla/Virtual-Teacher/team-template/blob/master/photos/4.jpg ]*

## Questions

### How did you build it? (Platform and technology)

*[This AR experience has been built by using Unity platform along with Vuforia software development kit (SDK). Vuforia uses computer vision technology to position and track objects after specifying a target.]*

### What challenges did you face?

*[One of the challenges we had faced is getting familiar with using Vuforia SDK, which is a new experience for us. The other challenge we had is connecting the objects with each other and writing a code that does not affect them.]*

### What aspect of the AR experience do you like best? 

*[Seeing a 3D object infornt of the user while using AR, is one of the best things we did like. A 3D object would make the experience more interesting, and would also provide the user with the ability of moving those objects and interact with them. The other best thing we liked was the interaction with spaces in the real life.]*

### What would you different in the future? 

*[To make this game more fun and competitive there are few things we could add such as: 1) Putting a score text that increases each time the user chooses the right answer. 2) Provide the users with the ability of making their own accounts to check their own results and share it with friends and family. 3) Putting more levels, which can be sorted into different experiences that teach the users various life essentials.]*

### Please also add a link to your code!

*[using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Vuforia;

public class vb : MonoBehaviour, IVirtualButtonEventHandler {

    public GameObject vbBtnObj;
    public GameObject theObject;
    public GameObject sliced;
    public Animator Ani;

    // Use this for initialization
    void Start () {
        vbBtnObj = GameObject.Find("TomatoButton");
        vbBtnObj.GetComponent<VirtualButtonBehaviour>().RegisterEventHandler(this);
        theObject.SetActive(true);
    }

    int num = 1;

    // Update is called once per frame
    void Update () {
		
	}

    public void OnButtonPressed(VirtualButtonBehaviour vb)
    {
        if (num == 1)
        {
           
            Ani.Play("Tomato Animation");
            Debug.Log("BTN Pressed");
            sliced.SetActive(true);
            //theObject.SetActive(false);
            num = 0;
        }
        throw new System.NotImplementedException();
    }

    public void OnButtonReleased(VirtualButtonBehaviour vb)
    {
        Ani.Play("none");
        Debug.Log("BTN Released");
        throw new System.NotImplementedException();
    }
}
]*
