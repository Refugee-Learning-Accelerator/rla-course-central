﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rotate : MonoBehaviour {
    public float speed = 1.0f;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        Vector3 angles = gameObject.transform.localEulerAngles;
        angles.y += speed;
        gameObject.transform.localEulerAngles = angles;
	}
}
