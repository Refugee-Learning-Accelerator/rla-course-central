RestartTrackableHandler


using System;
using System.Collections;
using System.Collections.Generic;

using UnityEngine;
using UnityEngine.UI;

using Newtonsoft.Json;
using FrostweepGames.Plugins.GoogleCloud.SpeechRecognition;

//using Google.Cloud.Translation.V2;

namespace FrostweepGames.Plugins.GoogleCloud.SpeechRecognition
{
public class textToSpeech : MonoBehaviour {

	public float sensitivity = 100;
	public float loudness = 0;

	public AudioSource _audio;
	public AudioSource _audioIn;
	public InputField inputText;
	
	public string dialogFlowSession = "chat" + (new System.Random ()).Next();
			
	/*private GCSpeechRecognition _speechRecognition;
	private Button _startRecordButton, _stopRecordButton;
	private Image _speechRecognitionState;
	private Text _speechRecognitionResult;
	//private Toggle _isRuntimeDetectionToggle;
	private Boolean runtimeDetectionOn = false;
	private Dropdown _languageDropdown;
	//private InputField _contextPhrases;
*/

	// Use this for initialization
	void Start () {
	/*	_speechRecognition = GCSpeechRecognition.Instance;
		_speechRecognition.RecognitionSuccessEvent += RecognitionSuccessEventHandler;
		_speechRecognition.NetworkRequestFailedEvent += SpeechRecognizedFailedEventHandler;
		_speechRecognition.LongRecognitionSuccessEvent += LongRecognitionSuccessEventHandler;

		_startRecordButton = transform.Find("Canvas/Button_StartRecord").GetComponent<Button>();
		_stopRecordButton = transform.Find("Canvas/Button_StopRecord").GetComponent<Button>();

		_speechRecognitionState = transform.Find("Canvas/Image_RecordState").GetComponent<Image>();

		_speechRecognitionResult = transform.Find("Canvas/Text_Result").GetComponent<Text>();

		//_isRuntimeDetectionToggle = transform.Find("Canvas/Toggle_IsRuntime").GetComponent<Toggle>();

		_languageDropdown = transform.Find("Canvas/Dropdown_Language").GetComponent<Dropdown>();

		//_contextPhrases = transform.Find("Canvas/InputField_SpeechContext").GetComponent<InputField>();

		_startRecordButton.onClick.AddListener(StartRecordButtonOnClickHandler);
		_stopRecordButton.onClick.AddListener(StopRecordButtonOnClickHandler);

		_speechRecognitionState.color = Color.white;
		_startRecordButton.interactable = true;
		_stopRecordButton.interactable = false;

		_languageDropdown.ClearOptions();

		for (int i = 0; i < Enum.GetNames(typeof(Enumerators.LanguageCode)).Length; i++)
		{
			_languageDropdown.options.Add(new Dropdown.OptionData(((Enumerators.LanguageCode)i).ToString()));
		}

		_languageDropdown.onValueChanged.AddListener(LanguageDropdownOnValueChanged);

		_languageDropdown.value = _languageDropdown.options.IndexOf(_languageDropdown.options.Find(x => x.text == Enumerators.LanguageCode.en_GB.ToString()));
*/


		_audio = gameObject.GetComponent<AudioSource> ();

		/*audio.clip = Microphone.Start("Built-in Microphone",true, 10, 44100);
		audio.clip = Microphone.Start(null,true, 10, 44100);
		audio.loop = true;
		audio.mute = true;
		while (!(Microphone.GetPosition(null) > 0 ) ){}
		audio.Play();*/


		//StartCoroutine (DownloadTheAudio());


	}
	
	// Update is called once per frame
	void Update () {
		

	}


	IEnumerator DownloadTheAudio(){
			string urlTranslation = "https://translation.googleapis.com/language/translate/v2?target=fr&q="+inputText.text+"&key=AIzaSyAElhG2G1AtF28vQCkOtbYvV1MKWO2qL6c";
		WWW wwwTranslation = new WWW (urlTranslation);
		yield return wwwTranslation;
		string translatedTextInJSON = wwwTranslation.text;
		inputText.text = translatedTextInJSON;

		GoogleTranslateResponse googleTranslatedResponse = JsonConvert.DeserializeObject<GoogleTranslateResponse>(translatedTextInJSON);

		string resultInTargetLanguage = googleTranslatedResponse.data.translations[0].translatedText;
		//TranslationClient client = TranslationClient.Create();
		//string response = client.TranslateText("Hello World my friend.", "fr");

		inputText.text = resultInTargetLanguage;
		System.Console.Out.WriteLine("testing font " + inputText.textComponent.font.fontNames.GetType());

		string urlTextToSpeech = "https://translate.google.com/translate_tts?ie=UTF-8&tl=fr-fr&client=tw-ob&q=" + resultInTargetLanguage;
		//string urlTextToSpeech = "http://api.voicerss.org/?key=8ebd894673824e00910319641a8226d1&hl=en-us&src=Hello+world";
		WWW wwwTextToSpeech = new WWW (urlTextToSpeech);
		yield return wwwTextToSpeech;  

		_audio.clip = wwwTextToSpeech.GetAudioClip (false, true, AudioType.MPEG);
		_audio.Play ();



			string urlChatbotRequest = "https://dialogflow.googleapis.com//v2beta1/{session=projects/*/agent/sessions/"+dialogFlowSession+"}:detectIntent?queryInput=Bonjour" + resultInTargetLanguage;
		WWW wwwChatBotResponse = new WWW (urlChatbotRequest);
		yield return wwwChatBotResponse;  
		

	}



	public void ButtonClick(){
		StartCoroutine (DownloadTheAudio());
	}

	/*public void listenFromMic(){
		var audio = GetComponent.<AudioSource>();
		audio.clip = Microphone.Start("Built-in Microphone",true, 10, 44100);
		audio.loop = true;
		while (!(Microphone.GetPosition(null) > 0 ) ){}
		audio.Play();
	}*/

	/*static void TranslateWithModel(string text, string targetLanguageCode, string sourceLanguageCode,
		TranslationModel model)
	{
		TranslationClient client = TranslationClient.Create();
		var response = client.TranslateText(text,
		targetLanguageCode, sourceLanguageCode, model);
		Console.WriteLine("Model: {0}", response.Model);
		Console.WriteLine(response.TranslatedText);
	}*/

	/*	static void Translate(string text, string targetLanguageCode,
	string sourceLanguageCode)
	{
		TranslationClient client = TranslationClient.Create();
		var response = client.TranslateText(text, targetLanguageCode,
			sourceLanguageCode);
		Console.WriteLine(response.TranslatedText);
	}*/

/*	private void OnDestroy(){
		_speechRecognition.RecognitionSuccessEvent -= RecognitionSuccessEventHandler;
		_speechRecognition.NetworkRequestFailedEvent -= SpeechRecognizedFailedEventHandler;
		_speechRecognition.LongRecognitionSuccessEvent -= LongRecognitionSuccessEventHandler;
	}


	private void StartRecordButtonOnClickHandler()
	{
		_startRecordButton.interactable = false;
		_stopRecordButton.interactable = true;
		_speechRecognitionState.color = Color.red;
		_speechRecognitionResult.text = string.Empty;
		//runtimeDetectionOn = _isRuntimeDetectionToggle.isOn;
		_speechRecognition.StartRecord(runtimeDetectionOn);
	}

	private void StopRecordButtonOnClickHandler()
	{
		ApplySpeechContextPhrases();

		_stopRecordButton.interactable = false;
		_speechRecognitionState.color = Color.yellow;
		_speechRecognition.StopRecord();
	}

	private void LanguageDropdownOnValueChanged(int value)
	{
		_speechRecognition.SetLanguage((Enumerators.LanguageCode)value);
	}

	private void ApplySpeechContextPhrases()
	{
		string[] phrases = null;//_contextPhrases.text.Trim().Split(","[0]);

		if (phrases.Length > 0)
			_speechRecognition.SetContext(new List<string[]>() { phrases });
	}

	private void SpeechRecognizedFailedEventHandler(string obj, long requestIndex)
	{
		_speechRecognitionResult.text = "Speech Recognition failed with error: " + obj;

		if (!runtimeDetectionOn)
		{
			_speechRecognitionState.color = Color.green;
			_startRecordButton.interactable = true;
			_stopRecordButton.interactable = false;
		}
	}

	private void RecognitionSuccessEventHandler(RecognitionResponse obj, long requestIndex)
	{
		if (!runtimeDetectionOn)
		{
			_startRecordButton.interactable = true;
			_speechRecognitionState.color = Color.green;
		}

		if (obj != null && obj.results.Length > 0)
		{
			_speechRecognitionResult.text = "Speech Recognition succeeded! Detected Most useful: " + obj.results[0].alternatives[0].transcript;

			string other = "\nDetected alternative: ";

			foreach (var result in obj.results)
			{
				foreach (var alternative in result.alternatives)
				{
					if (obj.results[0].alternatives[0] != alternative)
						other += alternative.transcript + ", ";
				}
			}

			_speechRecognitionResult.text += other;
		}
		else
		{
			_speechRecognitionResult.text = "Speech Recognition succeeded! Words are no detected.";
		}
	}

	private void LongRecognitionSuccessEventHandler(OperationResponse operation, long index)
	{
		if (!runtimeDetectionOn)
		{
			_startRecordButton.interactable = true;
			_speechRecognitionState.color = Color.green;
		}

		if (operation != null && operation.response.results.Length > 0)
		{
			_speechRecognitionResult.text = "Long Speech Recognition succeeded! Detected Most useful: " + operation.response.results[0].alternatives[0].transcript;

			string other = "\nDetected alternative: ";

			foreach (var result in operation.response.results)
			{
				foreach (var alternative in result.alternatives)
				{
					if (operation.response.results[0].alternatives[0] != alternative)
						other += alternative.transcript + ", ";
				}
			}

			_speechRecognitionResult.text += other;
			_speechRecognitionResult.text += "\nTime for the recognition: " + 
				(operation.metadata.lastUpdateTime - operation.metadata.startTime).TotalSeconds + "s";
		}
		else
		{
			_speechRecognitionResult.text = "Speech Recognition succeeded! Words are no detected.";
		}
	}*/
}


public class GoogleTranslateResponse{
	public Data data { get; set; }
}
public class Data{
	public List<Translation> translations { get; set; }
}
public class Translation{
	public string translatedText { get; set; }
	public string detectedSourceLanguage { get; set; }
}
}


