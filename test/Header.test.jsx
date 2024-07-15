import React from "react";
import { render, screen } from '@testing-library/react';
import { Header } from '../src/Header';
import "@testing-library/jest-dom";

describe('Headerのテスト',  () => {

  it('Helloと描画する要素が1つある', () => {
    render(<Header />);
    const element = screen.getAllByText('Hello');
    screen.debug(element);
    expect(element).toHaveLength(1);
  });
  
  it('Helloと描画するheader要素がある', () => {
    render(<Header />);
    const element = screen.getByRole('heading', { name: 'Hello' });
    screen.debug(element);
    expect(element).toBeInTheDocument();
  });

  it('list要素がある', () => {
    render(<Header />);
    const element = screen.getByRole('list');
    screen.debug(element);
    expect(element).toBeInTheDocument();
  });
  
  it('list項目が3つがある', () => {
    render(<Header />);
    const element = screen.getAllByRole('listitem');
    screen.debug(element);
    expect(element).toHaveLength(3);
  });
  
  it('data-testidがtestである要素が1つある', () => {
    render(<Header />);
    const element = screen.getByTestId('test');
    screen.debug(element);
    expect(element).toBeInTheDocument();
  });
  
});
