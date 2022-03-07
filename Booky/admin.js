function makeUserObject(username, password, email) {
  let user = {
    username: username,
    password: password,
    email: email,
  };
  return user;
}
function makeServiceObject(title, price, time, category) {
  let service = {
    title: title,
    price: price,
    time: time,
    category: category,
  };
  return service;
}
function makeEmployeeObject(name, role, schedule) {
  let employee = {
    name: name,
    role: role,
    schedule: schedule,
  };
  return employee;
}
function makeLocationObject(user_id, adress, title) {
  let location = {
    user_id: user_id,
    adress: adress,
    title: title,
    services: {},
    categories: {},
    emplyees: {},
  };
  return location;
}

async function getBusiness() {
  let request = await fetch("http://localhost:8000/business");
  let data = await request.json();
  console.log(data);
  return data;
}

getBusiness();

function createAdminMenu() {
  let html = `
    
    `;
}

function createDayCards() {

}

const myServicesHTML = (menu_title, business_title, business_location, business_category, image_url) => {
    let dayCards = createDayCards();
    return `
<div class="admin_main">
            <div class="admin_header">
                <h2 class="page_title">${menu_title}</h2>
                <div class="main_add_button">
                    <button id="add_new">Add new Business</button>
                </div>
            </div>
            <div class="businesses">
                <div class="business_card">
                    <div class="booky_header row">
                        <div class="header_info column">
                            <p id="business_title">${business_title}</p>
                            <hr class="booky_line"></hr>
                            <p id="business_location">${business_location}</p>
                            <p id="business_category">${business_category}</p>
                        </div>
                        <div class="header_image_div">
                            <img id="header_image" src="${image_url}" alt="" srcset="">
                        </div>
                    </div>
                    <div class="booky_footer">
                        <div class="calendar_header">
                            <h4>Antal Bokningar:</h4>
                        </div>
                        <div class="calendar row">
                            <div class="day column">
                                <div><h5>Mon</h5></div>
                                <div><p>4</p></div>
                            </div>
                            <div class="day column">
                                <div><h5>Mon</h5></div>
                                <div><p>4</p></div>
                            </div>
                            <div class="day column">
                                <div><h5>Mon</h5></div>
                                <div><p>4</p></div>
                            </div>
                            <div class="day column">
                                <div><h5>Mon</h5></div>
                                <div><p>4</p></div>
                            </div>
                            <div class="day column">
                                <div><h5>Mon</h5></div>
                                <div><p>4</p></div>
                            </div>
                            <div class="day column">
                                <div><h5>Mon</h5></div>
                                <div><p>4</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
`;
};
