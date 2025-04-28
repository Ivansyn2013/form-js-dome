import { Form } from '@bpmn-io/form-js';
import schema from './form-build.json';

const container = document.getElementById('form-container');
if (!container) console.error('Контейнер не найден!');

const data = {};

// Создаем форму
const form = new Form({ container, schema });
form.on('submit', (event) => {
    console.log(event.data, event.errors);
  });

try {
    await form.importSchema(schema, data);
  } catch (err) {
    console.error('failed to import form', err);
 };

// Принудительная проверка
// console.log('Form instance:', form);
// console.log('Container content:', container.innerHTML);
console.log('Styles loaded:', 
    Array.from(document.styleSheets).some(s => 
      s.href?.includes('form-js.css')
  ));