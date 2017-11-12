import json
import requests
import urllib

TOKEN = "444874958:AAGjLuhNCjvZGJkNnwCCP5c4cffIMy_vkNA"
URL = "https://api.telegram.org/bot{}/".format(TOKEN)


def get_url(url):
    response = requests.get(url)
    content = response.content.decode("utf8")
    return content


def get_json_from_url(url):
    content = get_url(url)
    js = json.loads(content)
    return js


def get_updates():
    url = URL + "getUpdates"
    js = get_json_from_url(url)
    return js


def get_last_chat_id_and_text(updates):
    num_updates = len(updates["result"])
    last_update = num_updates - 1
    text = updates["result"][last_update]["message"]["text"]
    chat_id = updates["result"][last_update]["message"]["chat"]["id"]
    message_id=updates["result"][last_update]["message"]["message_id"]
    return (text, chat_id, message_id)


def send_message(text, chat_id):
    url = URL + "sendMessage?text={}&chat_id={}&parse_mode=markdown".format(text, chat_id)
    print (url)
    get_url(url)



if __name__ == '__main__':
    last_message_id=""
    print ("hello")
    while(True):
        text, chat, message_id = get_last_chat_id_and_text(get_updates())
        if (last_message_id!=message_id):
            send_message( urllib.quote_plus(text+"\nHello"), chat)
            send_message("`hELLO`",chat)
        last_message_id=message_id
