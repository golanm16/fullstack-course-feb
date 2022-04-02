# Forms and classes

## forms

### מבנה:

```html
<form>
  <label for="user-name">user name</label>
  <input type="text" id="user-name" name="userName" />
  <button>submit</button>
</form>
```

- form: פה יכנסו כל הקלטים שלנו שנוכל לשלוח אותם ביחד
- action: לאן לשלוח את המידע
- label: טקסט המתאר את הקלט שהוא מיועד לו
- for: משייך את הלייבל למזהה של הקלט
- input: אלמנט הקלט של html
- type: איזה סוג קלט זה אמור להיות
- id: המזהה של האלמנט
- name: איזה שם יהיה לקלט בעת שליחת המידע

לזכור!

- id: לכל אלמנט אפשר להביא מזהה
- label: לא חייב להיות דווקא של קלט

### תרגיל:

לחפש בגוגל מתוך פורם שאנחנו יצרנו

#### פתרון:

```html
<form action="https://www.google.com/search">
  <label for="query">search</label>
  <input type="text" id="query" name="q" />
  <button>search</button>
</form>
```

#### הסבר:

בחיפוש של גוגל שורת הכתובת נראית כך:
`https://www.google.com/search?q=bla`

הגדרנו action כדי ללכת ל google.com/search
ואז הוספנו את q לשם של הקלט שלנו וכך גוגל זיהה את הקלט שלנו בתור חיפוש.

## classes

### מבנה:

```html
<h4 class="header">animal</h4>
<div class="item animal">cat</div>
<div class="item animal">dog</div>
```

```css
.animal {
  background-color: chocolate;
}
.item {
  color: blue;
}
.header {
  color: cornflowerblue;
}
```

- לכל אלמנט יכולים להיות כמה קלאסים, שהמפריד ביניהם הוא רווח.
- רצוי לתת שמות משמעותיים לקלאסים כדי שנזכור אח"כ מה כל אחד מהם מתאר
- נגדיר בcss איזה class אני רוצה לעצב ע"י הנקודה בראש שם הclass

בשיעור הבא אולי נעבור על חלק מהיכולות של css כדי שתכירו מה אפשר לעשות איתו בצורה בסיסית

