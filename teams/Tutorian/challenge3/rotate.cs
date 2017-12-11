using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rotate : MonoBehaviour
{
    void Start()
    {
        gameObject.transform.localEulerAngles = new Vector3(0, 0, 0);
    }

    int time = 0;
    void Update()
    {
        var v = gameObject.transform.localEulerAngles;

        if (time == 0)
        {
            if ((int)v.z == 0 || ((int)v.z >= 179 && (int)v.z <= 181))
            {
                time++;
                if ((int)v.z >= 359)
                {
                    v.z = 0;
                    gameObject.transform.localEulerAngles = v;
                }
                return;
            }
            else
            {
                v.z = v.z + 10;
                gameObject.transform.localEulerAngles = v;
            }
        }
        else
        {
            if (time++ == 50)
            {
                time = 0;
                v.z = v.z + 10;
                gameObject.transform.localEulerAngles = v;
            }
        }


    }
}
