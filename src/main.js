import { Form } from '@bpmn-io/form-js'

// Загрузка схемы формы
fetch('./form-build.json')
  .then(response => response.json())
  .then(schema => {
    new Form({
      container: document.getElementById('form-container'),
    //   schema: schema
    schema: {
        "type": "default",
        "components": [
          { "type": "text", "key": "error_field", "label": "Тестовое поле" }
        ]
      }
    })
    
  })
  .catch(error => {  // Перенесённый catch
    console.error('Ошибка загрузки JSON:', error);
    fetch('./form-build.json')
      .then(res => res.text())
      .then(text => console.log('Сервер вернул:', text));
  });