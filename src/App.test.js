import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { fetchMissions as mockFetchMissions } from "./api/fetchMissions";

// mock the function that makes the api call
jest.mock("./api/fetchMissions");
