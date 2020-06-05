import React, { useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import axios from "axios";
import api from "../../services/api";

import { Container, Content, Form } from "./styles";

interface Service {
  id: number;
  name: string;
  image_url: string;
}

interface IBGEUfResponse {
  sigla: string;
}

interface IBGECitiesResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState("0");
  const [initialPositon, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPositon, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  //Load initial position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  //Load Services from local API
  useEffect(() => {
    api.get("/services").then((response) => {
      setServices(response.data);
    });
  }, []);

  // Load UF from IBGE api
  useEffect(() => {
    axios
      .get<IBGEUfResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  // Load cities from IBGE api
  useEffect(() => {
    if (selectedUf === "0") return;

    api
      .get<IBGECitiesResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cities = response.data.map((city) => city.nome);

        setCities(cities);
      });
  }, [selectedUf]);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setSelectedPosition([lat, lng]);
  }

  return (
    <Container>
      <Content>
        <header>
          <h2 className="content__logo">Quartier</h2>

          <Link to="/">
            <FiArrowLeft />
            Voltar para página incial
          </Link>
        </header>
        <Form>
          <h1>
            Cadastro do <br /> seu estabelecimento{" "}
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <div className="field">
              <label htmlFor="name">Nome do estabelecimento</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className="field">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input type="text" name="whatsapp" id="whatsapp" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Endereço</h2>
              <span>Selecione com um clique o endereço no mapa</span>
            </legend>

            <Map center={initialPositon} zoom={15} onClick={handleMapClick}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={selectedPositon} />
            </Map>

            <div className="field-group">
              <div className="field">
                <label htmlFor="uf">Estado (UF)</label>
                <select
                  name="uf"
                  id="uf"
                  value={selectedUf}
                  onChange={handleSelectedUf}
                >
                  <option value="0">Selecione uma UF</option>
                  {ufs.map((uf) => (
                    <option value={uf} key={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select
                  name="city"
                  id="city"
                  value={selectedCity}
                  onChange={handleSelectedCity}
                >
                  <option value="0">Selecione uma cidade</option>
                  {cities.map((city) => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Tipo de Serviço</h2>
              <span>Selecione uma oção abaixo</span>
            </legend>

            <ul className="items-grid">
              {services.map((service) => (
                <li key={service.id}>
                  <img
                    className="service__image"
                    src={service.image_url}
                    alt={service.name}
                  />
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </fieldset>
          <button type="submit">Cadastrar estabelecimento</button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreatePoint;
