import React, {useContext, useState} from "react";
import {Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../urls/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Authorization = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const[surname,setSurname] = useState("");
    const[patronymic,setPatronymic] = useState("");
    // const[typeUserId,setTypeUserId] = useState(0);
    const[isSeller,setIsSeller] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleLoginOrReg = async () => {
        try {
            let typeUserId = 4;
            if (isSeller) typeUserId = 10;

            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, name, surname, patronymic, typeUserId)
            }
            user.setUser(user)
            if (isSeller || data.typeUserId === 10) {
                user.setIsAuthSeller(true)
                user.setIsAuthBuyer(true)
            }
            else {
                user.setIsAuthSeller(false)
                user.setIsAuthBuyer(true)
            }
            navigate(SHOP_ROUTE)
        }
        catch (e) {
            if (e?.response?.data?.message) {
                alert(e.response.data.message)
            } else {
                alert("Произошла ошибка")
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setIsError(true);
        } else {
            setIsError(false);
            handleLoginOrReg();
        }
        // event.preventDefault();
        // event.stopPropagation();
        // console.log("state:", validated)
        // if (validated) {
        //     click();
        //     console.log('fggg')
        //
        // }
    };
    return (
        <Container
            className={`d-flex justify-content-center align-items-center ${isLogin ? "auth" : "reg"}`}
        >
            <Card style={{width: 600}} className="p-3">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                {/*<Form className="d-flex flex-column">*/}
                {/*    <Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите Ваш email..."*/}
                {/*        value={email}*/}
                {/*        onChange={e => setEmail(e.target.value)}*/}
                {/*    />*/}
                {/*    <Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите Ваш пароль..."*/}
                {/*        value={password}*/}
                {/*        onChange={e => setPassword(e.target.value)}*/}
                {/*        type="password"*/}
                {/*    />*/}
                {/*    {isLogin ? '' :*/}
                {/*        <div><Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите Ваше имя..."*/}
                {/*        value={name}*/}
                {/*        onChange={e => setName(e.target.value)}*/}
                {/*        /><Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите Вашу фамилию..."*/}
                {/*        value={surname}*/}
                {/*        onChange={e => setSurname(e.target.value)}*/}
                {/*        /><Form.Control*/}
                {/*        className="mt-3"*/}
                {/*        placeholder="Введите Ваше отчество..."*/}
                {/*        value={patronymic}*/}
                {/*        onChange={e => setPatronymic(e.target.value)}*/}
                {/*        /></div>}*/}
                {/*    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">*/}
                {/*        {isLogin ?*/}
                {/*            <div>*/}
                {/*                Нет аккаунта? Тогда жми: <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>*/}
                {/*            </div>*/}
                {/*            :*/}
                {/*            <div>*/}
                {/*                Есть аккаунт? Тогда жми: <NavLink to={LOGIN_ROUTE}>Авторизироваться</NavLink>*/}
                {/*            </div>*/}
                {/*        }*/}
                {/*        <Button*/}
                {/*            variant={"outline-success"}*/}
                {/*            onClick={click}*/}
                {/*        >*/}
                {/*            {isLogin ? 'Войти' : 'Регистрация'}*/}
                {/*        </Button>*/}
                {/*    </Row>*/}
                {/*</Form>*/}
                <Form noValidate validated={isError} onSubmit={handleSubmit} className="d-flex flex-column">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label className="mt-1">@Email:</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Введите Ваш email..."
                            pattern="^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback>Email введен!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите email.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label className="mt-1">Пароль:</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                placeholder="Введите Ваш пароль..."
                                required
                                value={password}
                                pattern="(?=.*\d)(?=.*[@$!%*#?&-+=])(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                style={{width: "100%"}}
                            />
                            <Form.Control.Feedback>Пароль введен!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Пожалуйста, введите пароль.</Form.Control.Feedback>
                            {!isLogin ?
                            <Form.Text className="text-muted">
                                Пароль должен:
                                <li>содержать больше 7 символов;</li>
                                <li>содержать специальный символ (@$!%*#?&-+=);</li>
                                <li>содержать хотябы цифру, символ верхнего и нижнего регистров;</li>
                            </Form.Text>
                                : null}
                        </InputGroup>
                    </Form.Group>
                    {isLogin ? null : <div>
                        <Form.Check
                            type="switch"
                            checked={isSeller}
                            onChange={e => setIsSeller(e.target.checked)}
                            label="Я покупатель/Я продавец"
                        />
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label className="mt-1">Фамилия:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите Вашу фамилию..."
                            required
                            pattern="[А-Я]{1}[а-я]{2,40}|[а-я]{3,40}"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                        />
                        <Form.Control.Feedback>Фамилия введена!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите фамилию.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label className="mt-1">Имя:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите Ваше имя..."
                            required
                            pattern="[А-Я]{1}[а-я]{2,40}|[а-я]{3,40}"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Form.Control.Feedback>Имя введено!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите имя.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                        <Form.Label className="mt-1">Отчество:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите Ваше отчество..."
                            required
                            value={patronymic}
                            pattern="[А-Я]{1}[а-я]{2,40}|[а-я]{3,40}"
                            onChange={e => setPatronymic(e.target.value)}/>
                        <Form.Control.Feedback>Отчество введено!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Пожалуйста, введите отчество.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-1">
                        <Form.Check
                            required
                            pattern="[А-Я]{1}[а-я]{2,40}|[а-я]{3,40}"
                            label="Все данные которые я ввел мои"
                            feedback="Вы должны подтвердить, что это ваши данные!"
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    </div>}
                    <Row className="d-flex justify-content-between mt-1 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? Тогда жми: <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? Тогда жми: <NavLink to={LOGIN_ROUTE}>Авторизироваться</NavLink>
                            </div>
                        }
                        <Button className="mt-1" type="submit" variant={"outline-success"}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Authorization;
